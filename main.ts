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

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
