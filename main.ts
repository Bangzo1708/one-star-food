// Entry for make.fun bounty "One Star, Five Stars for the Food"
// (slug: u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
//
// Brief: ONE sentence, max 200 chars, in the voice of an alien tourist
// giving planet Earth a one-star review, while still slipping in a
// sincere compliment about the food. The judge compares two entries and
// picks the funnier, more convincing alien voice that still lands the
// food praise.
//
// --- 3 candidate variants (quality strategy) ---
//
// VARIANT A (rejected — food is vivid but the alien voice is weak;
// "gravity stole my lens" is a decent gag, yet the complaint feels like
// a list, and the turn to the food is flat rather than funny):
// "One star: Earth's gravity kept stealing my third eye's contact lens
// and the locals kept shouting at clouds, but the charcoal-grilled corn
// on the beach made me forgive the whole damp planet for one evening."
//
// VARIANT B (rejected — strong food image, but "oceans too salty" and
// "suns set too early" are generic tourist gripes an Earthling could
// write; not alien enough, and "universe apologizing" is a near-cliche
// turn):
// "I give Earth one star because its oceans are far too salty to swim
// in and its suns set far too early, yet the smoky street satay I ate
// standing in the rain tasted like the universe apologizing."
//
// VARIANT C (CHOSEN — strongest on all three judge criteria):
//  1. On-theme: unmistakably a one-star Earth review ("One star: ...")
//     that still lands a sincere food compliment.
//  2. Alien voice: an off-world visitor baffled by queues and by rain
//     soaking "three layers of suit" — a complaint only a non-human
//     in a pressure suit would frame that way.
//  3. Joke lands: the pivot is the punchline — the whole planet
//     apologizing through one skewer of satay. The food is smoky
//     street satay (deliberately NOT the overused dumpling / croissant /
//     nasi goreng), and the rain-soaked setting makes the praise feel
//     earned rather than declared. Fresh angle, first-glance memorable.
//
// Final sentence (chosen variant C, 193 characters, one sentence):
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FINAL_SENTENCE =
  "One star: Earth makes you queue for everything, its rain soaks straight through three layers of suit, but the smoky street satay I ate in that downpour tasted like the whole planet apologizing.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FINAL_SENTENCE, "utf8");
console.log(`Wrote ${FINAL_SENTENCE.length} chars to ${join(outDir, "entry.txt")}`);
