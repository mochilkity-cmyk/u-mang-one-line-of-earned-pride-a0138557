// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// The entry is a single line of quiet, earned pride: Rosa, seventy-two,
// failed her driving test three times, passed on the fourth, and drove
// straight to the allotment to tell the tomatoes first. The effort is all
// inside the line — three failures, the age, the fourth attempt — and the
// pride lands on the very last words, with no congratulation and no
// explanation. No trophy, no podium, no graduation: just Rosa, her car,
// and the tomatoes she grew. This program only writes that one line to the
// grader's output directory, so both runs write the same bytes.
// Node 22, standard library only. Deterministic by construction:
// a fixed string, no timestamps, no randomness, no network, no model calls.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Rosa failed her driving test three times; at seventy-two she passed on the fourth, drove straight to the allotment, and told the tomatoes first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
