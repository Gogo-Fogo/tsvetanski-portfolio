// Checks every sitemap route at phone, tablet and desktop widths in both themes:
// no horizontal page scroll, exactly one <main> and one <h1>, and the name not doubled in
// the title. Run against a local build: `npx next start -p 3000 -H 127.0.0.1`.
//
//   node scripts/ui-snapshots/sweep.mjs            # every route
//   node scripts/ui-snapshots/sweep.mjs projects   # routes containing "projects"

import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connect, delay, evaluate, getOpenPort, resolveBrowserPath, waitForJson } from "./browser.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.GRAPH_BASE_URL || "http://127.0.0.1:3000";
const TMP_DIR = path.resolve(__dirname, "..", "..", "tmp");
const PROFILE_DIR = path.join(TMP_DIR, `.sweep-browser-profile-${process.pid}-${Date.now()}`);

const WIDTHS = [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1440, height: 1000 },
];
const THEMES = ["dark", "light"];

async function routesFromSitemap() {
  const xml = await fetch(`${BASE_URL}/sitemap.xml`).then((response) => response.text());
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname || "/");
}

async function waitForLoad(client, timeoutMs = 20000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const ready = await evaluate(client, "document.readyState === 'complete' && !!document.querySelector('h1, main')");
    if (ready) return;
    await delay(100);
  }
  throw new Error("page did not finish loading");
}

async function main() {
  const filters = process.argv.slice(2);
  const routes = (await routesFromSitemap()).filter((route) => !filters.length || filters.some((filter) => route.includes(filter)));
  const port = await getOpenPort();
  await mkdir(PROFILE_DIR, { recursive: true });
  const browser = spawn(
    resolveBrowserPath(),
    ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", `--remote-debugging-port=${port}`, `--user-data-dir=${PROFILE_DIR}`, "about:blank"],
    { stdio: "ignore", windowsHide: true },
  );

  const failures = [];
  let checks = 0;
  try {
    const debuggingUrl = `http://127.0.0.1:${port}`;
    await waitForJson(`${debuggingUrl}/json/version`);
    const target = await fetch(`${debuggingUrl}/json/new?about:blank`, { method: "PUT" }).then((response) => response.json());
    const client = connect(target.webSocketDebuggerUrl);
    await client.ready;
    await client.send("Page.enable");
    await client.send("Runtime.enable");

    for (const theme of THEMES) {
      await client.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: theme }] });
      for (const size of WIDTHS) {
        await client.send("Emulation.setDeviceMetricsOverride", {
          width: size.width,
          height: size.height,
          deviceScaleFactor: 1,
          mobile: size.width < 600,
        });
        for (const route of routes) {
          checks += 1;
          const label = `${route} @${size.width} ${theme}`;
          try {
            await client.send("Page.navigate", { url: `${BASE_URL}${route}` });
            await delay(150);
            await waitForLoad(client);
            await evaluate(client, `localStorage.setItem('portfolio-theme', '${theme}'); document.documentElement.dataset.theme = '${theme}'; true`);
            await delay(150);
            const result = await evaluate(
              client,
              `(() => ({
                scrollWidth: document.documentElement.scrollWidth,
                innerWidth,
                mains: document.querySelectorAll('main').length,
                h1s: document.querySelectorAll('h1').length,
                title: document.title,
                wide: [...document.querySelectorAll('body *')]
                  .filter((el) => el.getBoundingClientRect().right > innerWidth + 1 && getComputedStyle(el).position !== 'fixed')
                  .slice(0, 3)
                  .map((el) => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : '')),
              }))()`,
            );
            const problems = [];
            if (result.scrollWidth > result.innerWidth + 1) problems.push(`horizontal scroll ${result.scrollWidth}px (${result.wide.join(", ")})`);
            if (result.mains !== 1) problems.push(`${result.mains} <main>`);
            if (result.h1s !== 1) problems.push(`${result.h1s} <h1>`);
            if ((result.title.match(/Georgi Tsvetanski/g) || []).length > 1) problems.push(`title "${result.title}"`);
            if (problems.length) failures.push(`${label}: ${problems.join("; ")}`);
          } catch (error) {
            failures.push(`${label}: ${error.message}`);
          }
        }
      }
    }
    client.close();
  } finally {
    browser.kill();
    await delay(300);
    await rm(PROFILE_DIR, { recursive: true, force: true });
  }

  if (failures.length) {
    console.error(`${failures.length} of ${checks} checks failed:\n- ${failures.join("\n- ")}`);
    process.exitCode = 1;
  } else {
    console.log(`all ${checks} checks passed (${routes.length} routes × ${WIDTHS.length} widths × ${THEMES.length} themes)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
