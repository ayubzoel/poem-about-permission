// The poem about permission — entry for make.fun's
// "The poem about permission" bounty.
// Writes one short poem about agency to /output/entry.txt.
// Deterministic: the same bytes on every run. No network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "She kept the key and waited by the door,",
  "and asked the world each night to say",
  "'You may.' At dawn she asked for nothing more:",
  "she turned the key herself — and it gave way.",
].join("\n") + "\n";

// Rhyme scheme ABAB: lines 1 and 3 end on "door" / "more" (A),
// lines 2 and 4 on "say" / "way" (B).
// The gate requires 1-280 Unicode code points: fail loudly otherwise.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`entry.txt must be 1-280 characters, got ${codePoints}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
