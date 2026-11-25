import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "My crypto portfolio is like a rollercoaster — except the safety bar broke and I'm still strapped in.";

// Writes the single entry line to /output/entry.txt as UTF-8, no trailing newline.
function writeEntry(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, { encoding: "utf8" });
}

function main(): void {
  writeEntry();
}

main();
