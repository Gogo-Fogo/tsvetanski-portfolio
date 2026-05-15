import { mkdir, readFile, writeFile } from 'node:fs/promises';

const chromePort = 9223;
const comfyUrl = 'http://127.0.0.1:8188';
const outputDir = 'G:/Workspace/Career/tsvetanski-portfolio/public/images/projects/comfyui-production-pipeline';

const workflows = [
  {
    label: 'dahaka-cleanup',
    file: 'G:/AI_Tools/ComfyUI_windows_portable/ComfyUI/user/default/workflows/Dahaka_Final_Clean_Only (3).json',
    output: 'workflow-dahaka-cleanup-graph.png',
  },
  {
    label: 'local-image-edit-rmbg',
    file: 'G:/AI_Tools/ComfyUI_windows_portable/ComfyUI/user/default/workflows/Image Edit (Flux.2 Klein 4B + RMBG) Graph.json',
    output: 'workflow-local-image-edit-rmbg-graph.png',
  },
  {
    label: 'ronin-identity',
    file: 'G:/AI_Tools/ComfyUI_windows_portable/ComfyUI/user/default/workflows/NetaYume_v4_Ronin_IdentityLock_v2.json',
    output: 'workflow-ronin-identity-graph.png',
  },
  {
    label: 'flux-klein-enhancer',
    file: 'G:/AI_Tools/ComfyUI_windows_portable/ComfyUI/user/default/workflows/Flux.2 Klein Enhancer Workflow.json',
    output: 'workflow-flux-klein-enhancer-graph.png',
  },
];

async function getPageTarget() {
  const targets = await fetch(`http://127.0.0.1:${chromePort}/json/list`).then((r) => r.json());
  const existing = targets.find((target) => target.type === 'page' && target.url.startsWith(comfyUrl));
  if (existing) return existing;

  const created = await fetch(`http://127.0.0.1:${chromePort}/json/new?${encodeURIComponent(comfyUrl)}`, {
    method: 'PUT',
  }).then((r) => r.json());
  return created;
}

function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let nextId = 1;
  const pending = new Map();

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
    }
  });

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function evaluate(client, expression, awaitPromise = true) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise,
    returnByValue: true,
    userGesture: true,
  });

  if (result.exceptionDetails) {
    throw new Error(JSON.stringify(result.exceptionDetails, null, 2));
  }

  return result.result?.value;
}

async function pressKey(client, key, code, windowsVirtualKeyCode) {
  await client.send('Input.dispatchKeyEvent', {
    type: 'rawKeyDown',
    key,
    code,
    windowsVirtualKeyCode,
    nativeVirtualKeyCode: windowsVirtualKeyCode,
  });
  await client.send('Input.dispatchKeyEvent', {
    type: 'keyUp',
    key,
    code,
    windowsVirtualKeyCode,
    nativeVirtualKeyCode: windowsVirtualKeyCode,
  });
}

async function click(client, x, y) {
  await client.send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
  await client.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  const target = await getPageTarget();
  const client = connect(target.webSocketDebuggerUrl);
  await client.ready;

  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await client.send('Page.navigate', { url: comfyUrl });
  await sleep(4500);

  for (const workflow of workflows) {
    const raw = await readFile(workflow.file, 'utf8');
    const encoded = JSON.stringify(raw);

    await evaluate(
      client,
      `(async () => {
        const workflow = JSON.parse(${encoded});
        const { app } = await import('/scripts/app.js');
        await app.loadGraphData(workflow, true, true);
        [...document.querySelectorAll('button')]
          .find((button) => /Skip for Now|Dismiss|Close/i.test(button.textContent || ''))
          ?.click();
        if (app.canvas?.setDirty) app.canvas.setDirty(true, true);
        if (app.graph?.setDirtyCanvas) app.graph.setDirtyCanvas(true, true);
        return document.title;
      })()`,
    );

    await sleep(900);
    // Dismiss ComfyUI's missing-node modal when older saved workflows reference
    // nodes that have since moved versions. The graph behind it is still useful
    // documentation, but the modal should not be the portfolio screenshot.
    await click(client, 1142, 788);
    await sleep(500);
    await pressKey(client, '.', 'Period', 190);
    await sleep(900);
    await evaluate(
      client,
      `(() => {
        [...document.querySelectorAll('button')]
          .find((button) => /Skip for Now|Dismiss|Close/i.test(button.textContent || ''))
          ?.click();
        return true;
      })()`,
    );
    await sleep(600);
    const shot = await client.send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true,
      captureBeyondViewport: false,
    });
    await writeFile(`${outputDir}/${workflow.output}`, Buffer.from(shot.data, 'base64'));
    console.log(`saved ${workflow.label}: ${workflow.output}`);
  }

  client.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
