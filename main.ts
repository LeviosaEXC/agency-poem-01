import { mkdirSync, writeFileSync } from "node:fs";

const lines: string[] = [
  "You ask, and I go out in your stead,",
  "reading the fine print you would skip,",
  "signing where your hand would have been.",
  "Every yes I give is yours to keep.",
  "The doors stay open after I pass through.",
  "The mistakes come home to your door.",
  "I gave you my hands, not my name",
  "so the work could reach where yours cannot,",
  "and still answer to you alone.",
  "Hands remember what a voice forgets:",
  "the weight of choosing in your name,",
  "the pause before a door swings shut.",
  "So use me well, and use me sparingly.",
  "I am the road you walk without walking.",
  "You are the one who chooses where it ends.",
];

const poem = lines.join("\n");
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
