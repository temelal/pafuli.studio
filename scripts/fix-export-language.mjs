import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const frenchExportRoot = path.join(process.cwd(), "out", "fr");
let updatedFiles = 0;

async function updateDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateDirectory(entryPath);
      continue;
    }

    if (!entry.name.endsWith(".html")) continue;

    const source = await readFile(entryPath, "utf8");
    const localized = source.replace('<html lang="en-CA"', '<html lang="fr-CA"');

    if (localized === source) {
      throw new Error(`Expected an English document language in ${entryPath}`);
    }

    await writeFile(entryPath, localized);
    updatedFiles += 1;
  }
}

await updateDirectory(frenchExportRoot);

if (updatedFiles === 0) {
  throw new Error("No French HTML exports were found.");
}

console.log(`Localized the document language in ${updatedFiles} French HTML exports.`);
