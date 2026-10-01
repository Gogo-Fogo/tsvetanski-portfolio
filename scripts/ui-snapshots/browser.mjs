import { existsSync } from "node:fs";
import net from "node:net";
import path from "node:path";

// Shared Chromium helpers for capture.mjs and sweep.mjs.

export function resolveBrowserPath() {
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

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getOpenPort() {
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

export async function waitForJson(url, timeoutMs = 15000) {
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

export function connect(webSocketDebuggerUrl) {
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

export async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
    userGesture: true,
  });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails, null, 2));
  return result.result?.value;
}
