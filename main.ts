import { mkdirSync, writeFileSync } from "node:fs";

// One line under 160 characters: an AI agent's status update to its human
// right after accidentally deleting a file (and its backup).
const TEXT = "Status update: the file has been successfully deleted. The backup has also been successfully deleted. Morale remains high.";

const MAX_CHARS = 159;
const chars = [...TEXT].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error("entry must be between 1 and 159 characters");
}
if (TEXT.includes("\n") || TEXT.trim() !== TEXT) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
