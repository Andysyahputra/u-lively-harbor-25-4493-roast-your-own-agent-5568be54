import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My agent reviews its own work: re-reads its answer, nods gravely, awards itself an A — peer review, minus the peer, minus the review.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
