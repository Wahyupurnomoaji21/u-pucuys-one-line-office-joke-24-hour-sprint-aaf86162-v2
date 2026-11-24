import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-Line Office Joke: 24-Hour Sprint (v2)
// Writes a single-line office joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

// The entry is exactly one sentence (113 characters), written with no
// trailing newline, so entry.txt matches the competition's 1-200 char rule.
const joke =
  "I asked for a second monitor and got a mindfulness lecture instead — apparently the screen I need is inner peace.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
