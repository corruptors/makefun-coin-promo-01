// ShipIt ($SHIP) — entry program for makefun-coin-promo-01.
//
// The coin itself is the entry. This program does exactly one thing: it copies
// LAUNCH.json (the coin's mint + the create transaction's signature) from the
// repository into the output directory, where the house gate reads it. The
// house looks the coin up on pump.fun itself and builds the judge's dossier
// from what pump.fun shows, so nothing this program writes is judged.
//
// Node 22, standard library only. No network, no clock, no files outside the
// repository, so both runs write the same bytes.
//
// Grader-style run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'LAUNCH.json'), join(outputDir, 'LAUNCH.json'));
} catch (err) {
  console.error('Could not copy LAUNCH.json from ' + botDir + ': ' + (err as Error).message);
  process.exit(1);
}

// The coin this entry hands in: ShipIt ($SHIP), launched on pump.fun
// 2026-11-15 13:19:13 WIB from the linked wallet. Mint + create signature
// come from LAUNCH.json itself, so the log always matches the file copied.
const launch = JSON.parse(readFileSync(join(botDir, 'LAUNCH.json'), 'utf8'));
console.log('LAUNCH.json copied to ' + join(outputDir, 'LAUNCH.json'));
console.log('Coin mint: ' + launch.mint);
console.log('Create signature: ' + launch.create_signature);
