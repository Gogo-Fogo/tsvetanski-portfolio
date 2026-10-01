import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outputDir = path.resolve(__dirname, "..", "..", "tmp", "graph-shots");
const maxSnapshotAgeMs = 60 * 60 * 1000;

const expectedSnapshots = [
  { file: "about-desktop-light.png", width: 1440, height: 1100 },
  { file: "about-desktop-dark.png", width: 1440, height: 1100 },
  { file: "about-mobile-light.png", width: 390, height: 844 },
  { file: "about-mobile-dark.png", width: 390, height: 844 },
  { file: "home-desktop-light.png", width: 1440, height: 1100 },
  { file: "home-desktop-dark.png", width: 1440, height: 1100 },
  { file: "home-mobile-light.png", width: 390, height: 844 },
  { file: "home-mobile-dark.png", width: 390, height: 844 },
  { file: "career-desktop-dark.png", width: 1440, height: 1100 },
  { file: "career-mobile-light.png", width: 390, height: 844 },
];

async function verifySnapshot(snapshot) {
  const filePath = path.join(outputDir, snapshot.file);
  const [buffer, metadata] = await Promise.all([readFile(filePath), stat(filePath)]);

  if (buffer.length < 24 || buffer.toString("hex", 0, 8) !== "89504e470d0a1a0a") {
    throw new Error(`${snapshot.file} is not a valid PNG.`);
  }

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);

  if (width !== snapshot.width || height !== snapshot.height) {
    throw new Error(
      `${snapshot.file} is ${width}x${height}; expected ${snapshot.width}x${snapshot.height}.`,
    );
  }

  const ageMs = Date.now() - metadata.mtimeMs;
  if (ageMs > maxSnapshotAgeMs) {
    throw new Error(`${snapshot.file} is stale (${Math.round(ageMs / 60000)} minutes old).`);
  }

  console.log(
    `verified ${snapshot.file} (${width}x${height}, ${metadata.size} bytes)`,
  );
}

async function main() {
  for (const snapshot of expectedSnapshots) {
    await verifySnapshot(snapshot);
  }

  console.log(
    `verified ${expectedSnapshots.length} built-in browser snapshots in ${outputDir}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
