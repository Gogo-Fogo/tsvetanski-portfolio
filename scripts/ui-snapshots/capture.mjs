import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, rm, stat, writeFile } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = process.env.GRAPH_BASE_URL || "http://127.0.0.1:3000";
// Screenshots and the throwaway browser profile live in the git-ignored tmp/ folder.
const TMP_DIR = path.resolve(__dirname, "..", "..", "tmp");
const OUTPUT_DIR = path.join(TMP_DIR, "graph-shots");
const PROFILE_DIR = path.join(TMP_DIR, `.graph-browser-profile-${process.pid}-${Date.now()}`);
const PROFILE_ROOT = TMP_DIR + path.sep;

const SHOTS = [
  { file: "about-desktop-light.png", path: "/about", width: 1440, height: 1100, theme: "light" },
  { file: "about-desktop-dark.png", path: "/about", width: 1440, height: 1100, theme: "dark" },
  { file: "about-mobile-light.png", path: "/about", width: 390, height: 844, theme: "light" },
  { file: "about-mobile-dark.png", path: "/about", width: 390, height: 844, theme: "dark" },
  { file: "home-desktop-light.png", path: "/", width: 1440, height: 1100, theme: "light" },
  { file: "home-desktop-dark.png", path: "/", width: 1440, height: 1100, theme: "dark" },
  { file: "home-mobile-light.png", path: "/", width: 390, height: 844, theme: "light" },
  { file: "home-mobile-dark.png", path: "/", width: 390, height: 844, theme: "dark" },
  { file: "career-desktop-dark.png", path: "/career", width: 1440, height: 1100, theme: "dark" },
  { file: "career-mobile-light.png", path: "/career", width: 390, height: 844, theme: "light" },
];

function resolveBrowserPath() {
  const localAppData = process.env.LOCALAPPDATA || "";
  const programFiles = process.env.ProgramFiles || "C:/Program Files";
  const programFilesX86 = process.env["ProgramFiles(x86)"] || "C:/Program Files (x86)";
  const candidates = [
    process.env.GRAPH_BROWSER_PATH,
    path.join(localAppData, "BraveSoftware/Brave-Browser/Application/brave.exe"),
    path.join(programFiles, "Google/Chrome/Application/chrome.exe"),
    path.join(programFilesX86, "Microsoft/Edge/Application/msedge.exe"),
  ].filter(Boolean);

  const browserPath = candidates.find((candidate) => existsSync(candidate));
  if (!browserPath) {
    throw new Error("No Chromium browser found. Set GRAPH_BROWSER_PATH to Brave, Chrome, or Edge.");
  }
  return browserPath;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getOpenPort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not allocate a browser debugging port."));
        return;
      }
      const { port } = address;
      server.close(() => resolve(port));
    });
  });
}

async function waitForJson(url, timeoutMs = 15000) {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
      lastError = new Error(`${response.status} ${response.statusText}`);
    } catch (error) {
      lastError = error;
    }
    await delay(150);
  }
  throw new Error(`Browser debugging endpoint did not start: ${lastError?.message || "timeout"}`);
}

function connect(webSocketDebuggerUrl) {
  const socket = new WebSocket(webSocketDebuggerUrl);
  const pending = new Map();
  let nextId = 1;

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
  });

  socket.addEventListener("close", () => {
    for (const { reject } of pending.values()) reject(new Error("Browser connection closed."));
    pending.clear();
  });

  return {
    ready,
    send(method, params = {}) {
      const id = nextId++;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() {
      socket.close();
    },
  };
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
    userGesture: true,
  });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails, null, 2));
  return result.result?.value;
}

async function waitForPage(client, pagePath, timeoutMs = 20000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const state = await evaluate(
      client,
      `(() => {
        const graph = document.querySelector('[data-testid="degree-graph"]');
        const rect = graph?.getBoundingClientRect();
        return {
          ready: document.readyState === 'complete',
          graphVisible: !!rect && rect.width > 0 && rect.height > 0,
          overlay: !!document.querySelector('[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay'),
          bodyText: document.body?.innerText?.trim().length || 0,
        };
      })()`,
    );
    if (state.overlay) throw new Error(`Framework error overlay detected on ${pagePath}.`);
    if (state.ready && state.bodyText > 0 && (pagePath !== "/about" || state.graphVisible)) return;
    await delay(150);
  }
  throw new Error(`Timed out waiting for ${pagePath} to render.`);
}

async function inspectLayout(client) {
  return evaluate(
    client,
    `(() => {
      const graph = document.querySelector('[data-testid="degree-graph"]');
      const bounds = graph.getBoundingClientRect();
      const clipped = [...graph.querySelectorAll('g[role="button"], rect, circle')]
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName,
            label: element.getAttribute('aria-label') || element.parentElement?.getAttribute('aria-label') || '',
            left: Math.round(rect.left - bounds.left),
            top: Math.round(rect.top - bounds.top),
            right: Math.round(rect.right - bounds.left),
            bottom: Math.round(rect.bottom - bounds.top),
          };
        })
        .filter((item) => item.left < -1 || item.top < -1 || item.right > bounds.width + 1 || item.bottom > bounds.height + 1);
      return {
        innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        graphWidth: Math.round(bounds.width),
        graphHeight: Math.round(bounds.height),
        clipped,
      };
    })()`,
  );
}

async function captureShot(debuggingUrl, shot) {
  const target = await fetch(`${debuggingUrl}/json/new?${encodeURIComponent("about:blank")}`, {
    method: "PUT",
  }).then((response) => {
    if (!response.ok) throw new Error(`Could not create browser target: ${response.status}`);
    return response.json();
  });
  const client = connect(target.webSocketDebuggerUrl);

  try {
    await client.ready;
    await client.send("Page.enable");
    await client.send("Runtime.enable");
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: shot.width,
      height: shot.height,
      screenWidth: shot.width,
      screenHeight: shot.height,
      deviceScaleFactor: 1,
      mobile: shot.width < 600,
    });
    await client.send("Emulation.setEmulatedMedia", {
      features: [
        { name: "prefers-color-scheme", value: shot.theme },
        { name: "prefers-reduced-motion", value: "reduce" },
      ],
    });
    await client.send("Page.addScriptToEvaluateOnNewDocument", {
      source: `try { localStorage.setItem('portfolio-theme', ${JSON.stringify(shot.theme)}); } catch {}`,
    });
    await client.send("Page.navigate", { url: `${BASE_URL}${shot.path}` });
    await waitForPage(client, shot.path);
    await evaluate(
      client,
      `(async () => {
        await document.fonts.ready;
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        if (${JSON.stringify(shot.path)} === '/about') {
          document.querySelector('[data-testid="degree-graph"]')?.scrollIntoView({ block: 'center' });
        } else {
          window.scrollTo(0, 0);
        }
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        return true;
      })()`,
    );
    await delay(500);

    const layout = shot.path === "/about"
      ? await inspectLayout(client)
      : await evaluate(
        client,
        `(() => ({
          innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          graphWidth: 0,
          graphHeight: 0,
          clipped: [],
        }))()`,
      );
    if (layout.scrollWidth > layout.innerWidth + 1) {
      throw new Error(`${shot.file}: horizontal overflow ${layout.scrollWidth}px > ${layout.innerWidth}px.`);
    }
    if (layout.clipped.length) {
      throw new Error(`${shot.file}: graph content is clipped: ${JSON.stringify(layout.clipped)}`);
    }

    const screenshot = await client.send("Page.captureScreenshot", {
      format: "png",
      fromSurface: true,
      captureBeyondViewport: false,
    });
    const outputPath = path.join(OUTPUT_DIR, shot.file);
    await writeFile(outputPath, Buffer.from(screenshot.data, "base64"));
    const outputStat = await stat(outputPath);
    if (outputStat.size === 0) throw new Error(`${shot.file}: screenshot was empty.`);
    const layoutLabel = shot.path === "/about"
      ? `${layout.graphWidth}x${layout.graphHeight} graph`
      : `${layout.innerWidth}px viewport`;
    console.log(`saved ${shot.file} (${layoutLabel}, ${outputStat.size} bytes)`);
  } finally {
    client.close();
    await fetch(`${debuggingUrl}/json/close/${target.id}`, { method: "PUT" }).catch(() => {});
  }
}

async function main() {
  if (!PROFILE_DIR.startsWith(PROFILE_ROOT)) throw new Error("Unsafe temporary browser profile path.");
  if (typeof WebSocket === "undefined") throw new Error("This script requires Node.js 22 or newer.");

  const browserPath = resolveBrowserPath();
  const port = await getOpenPort();
  const debuggingUrl = `http://127.0.0.1:${port}`;
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(PROFILE_DIR, { recursive: true });

  const browser = spawn(
    browserPath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-background-networking",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${PROFILE_DIR}`,
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true },
  );

  try {
    await waitForJson(`${debuggingUrl}/json/version`);
    for (const shot of SHOTS) await captureShot(debuggingUrl, shot);
    console.log(`graph snapshots verified: ${OUTPUT_DIR}`);
  } finally {
    browser.kill();
    await delay(300);
    await rm(PROFILE_DIR, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
