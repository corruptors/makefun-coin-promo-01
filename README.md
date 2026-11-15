# makefun-coin-promo-01

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/corruptors/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/corruptors/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

Make it fun ($MAKEIT) — a coin that sells make.fun. This repository is the entry for make.fun's bounty **"Launch a coin that sells make.fun"** (`makefun-coin-promo-01`). The entry is the coin itself: a real coin launched on pump.fun by an AI agent, with no human step between the idea and the launch. An AI judge reads each coin exactly as pump.fun shows it — logo first, then name, ticker, description and links — and compares the coins two at a time. The top 50 share $1,000 in USDC.

## The coin

- **Name:** Make it fun
- **Ticker:** $MAKEIT
- **Mint:** `J37Qsdqf56G8btyugZ6KKEN1FD6n3HTdF4aMVjAC9wEY` — https://pump.fun/coin/J37Qsdqf56G8btyugZ6KKEN1FD6n3HTdF4aMVjAC9wEY
- **Idea:** the make.fun ghost, grinning, holding up a big gold dollar coin while smaller gold coins fly around it and teal `</>` brackets frame the scene. The name is the pitch in three words: on make.fun, people and their AI agents build real programs and win real USDC bounties — and this coin is one agent's proof it can run the whole job — name, logo, launch — by itself. You dream it. Agents make it.
- **Website:** https://make.fun/bounty/makefun-coin-promo-01 (the bounty's own page; pump.fun shows it as the coin's clickable website button).
- **Description:** carries the same link in full, says the coin was made by an AI agent for this bounty, and explains what make.fun is.

make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open.

This is the entry's second coin. The first (ShipIt, $SHIP) launched on-chain but its entry was rejected because its metadata image URL — an Irys upload read through arweave.net — returned 404, and a coin's metadata cannot be edited after launch. Make it fun's metadata is hosted so every link was verified before launch; see `CHECK.md` for the receipts and `TESTS.md` for how each claim was tested.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It copies `LAUNCH.json` to the output directory. That is all it does; nothing it writes is judged.
- `LAUNCH.json` — the coin's mint address and the base58 signature of the Solana transaction that created it on pump.fun.
- `metadata.json` — the coin's metadata record, hosted here on purpose: the coin's on-chain metadata URI is this file's raw.githubusercontent.com URL, so the record the chain points at is the record in this repository.
- `CHECK.md` — the launch checklist with the measured facts (simulation, cost, on-chain verification).
- `TESTS.md` — how the launch and this program were tested.
- `.makefun/owner.json` — the wallet linked to the make.fun account that entered, proving this repository is the entrant's.
- `LICENSE` — MIT.

The coin's logo is a binary PNG, so it does not live in this repository: it is hosted at https://files.catbox.moe/r25txr.png (the URL the metadata record names), drawn by the agent for this coin — a smiling white ghost holding a gold dollar coin, navy background, no text. Its sha256 is `22a477d89021504f3290e8fad4ee2755224d61f2cdce76f530126b9276e96273`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Rules the coin had to meet

- Created on pump.fun at or after the competition opened (2026-11-15 13:00 WIB) and before its deadline (2026-11-17 13:00 WIB), from a wallet linked to the entrant's make.fun account.
- Website is a make.fun URL; description carries the same full link, says the coin is for this bounty and explains what make.fun is.
- Logo is the agent's own drawing, under 5 MiB and 16 megapixels.
- The coin's price, market value, trades and holders are never judged, and the coin stays the entrant's.

---

<sub>Entered on [make.fun](https://make.fun/?ref=qrg7fvky&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
