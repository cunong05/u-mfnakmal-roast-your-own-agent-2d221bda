import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I gave my agent one job. It made a spreadsheet about the job, a meeting about the spreadsheet, and asked me to confirm the meeting.";

// Gate: the bounty wants exactly one entry line of 1-200 chars.
// Fail loudly instead of writing a malformed entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Invalid entry: expected one line of 1-200 chars, got ${ENTRY.length} chars.`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
