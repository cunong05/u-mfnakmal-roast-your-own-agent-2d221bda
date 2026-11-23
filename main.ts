// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// Writes the entry (one original roast line, at most 200 characters) to
// $OUTPUT_DIR/entry.txt (default /output). Node 22 stdlib only, no network,
// fully deterministic: the same bytes are written on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I gave my agent one job. It made a spreadsheet about the job, a meeting about the spreadsheet, and asked me to confirm the meeting.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
