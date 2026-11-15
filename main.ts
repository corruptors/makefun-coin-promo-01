// Make it fun ($MAKEIT) — entry program for makefun-coin-promo-01.
//
// The coin itself is the entry. This program does exactly one thing: it copies
// LAUNCH.json (the coin's mint + the create transaction's signature) from the
// repository into the output directory, where the house gate reads it. The
// house looks the coin up on pump.fun itself and builds the judge's dossier
// from what pump.fun shows, so nothing this program writes is judged.
//
// Launch notes (why LAUNCH.json names this mint, and how it got there):
// This is the entry's second coin. The first, ShipIt ($SHIP), launched fine
// on-chain but its entry was rejected on the entry_link check: its metadata
// image URL sat on arweave.net behind an Irys upload, and that URL 404s —
// Irys uploads never resolve on arweave.net, and a coin's metadata is
// immutable, so the defect could never be patched in place. The relaunch
// therefore hosts the metadata where it can be verified before any spend:
// metadata.json lives in this very repository, the coin's metadata URI is
// its raw.githubusercontent.com URL (checked HTTP 200, byte-exact fields,
// before launch), and the logo PNG — a binary the repository push route
// cannot carry — is hosted at files.catbox.moe, browser-verified displaying.
// pump.fun's own /api/ipfs upload was not used: it is Cloudflare-blocked
// from our servers and returned HTTP 500 from a real browser, four times.
//
// The launch itself followed the standing playbook: simulate the create
// first and let the simulation price it. The first simulation (balance
// 0.025005637 SOL) showed a valid create costing 0.0058062 SOL that would
// have left 0.019199437 SOL — under the 0.02 SOL reserve the wallet must
// keep — so the launch held at the gate with nothing broadcast. After a
// top-up (balance 0.027250349 SOL) the same script re-simulated, passed the
// gate (cost 0.0058062 SOL, post-balance 0.021444149 SOL) and broadcast:
// mint J37Qsdqf56G8btyugZ6KKEN1FD6n3HTdF4aMVjAC9wEY, created 2026-11-15
// 19:32:31 WIB (slot 469730691), create-only, no dev buy. On-chain checks
// afterwards: create tx err = null, supply 1,000,000,000 MAKEIT, mint
// authority null, bonding curve live, the mint's metadata bytes carry this
// repository's metadata URI. See CHECK.md and TESTS.md for the full record.
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

// The coin this entry hands in: Make it fun ($MAKEIT), launched on pump.fun
// 2026-11-15 19:32:31 WIB from the linked wallet. Mint + create signature
// come from LAUNCH.json itself, so the log always matches the file copied.
const launch = JSON.parse(readFileSync(join(botDir, 'LAUNCH.json'), 'utf8'));
console.log('LAUNCH.json copied to ' + join(outputDir, 'LAUNCH.json'));
console.log('Coin mint: ' + launch.mint);
console.log('Create signature: ' + launch.create_signature);
// The coin's own page, derived from the mint alone: where the judge's
// dossier comes from, and where anyone can check this receipt against
// what pump.fun shows.
console.log('Coin page: https://pump.fun/coin/' + launch.mint);
