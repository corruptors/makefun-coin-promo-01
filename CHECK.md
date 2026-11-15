# CHECK — Make it fun ($MAKEIT) launch record

Coin: **Make it fun**, ticker **MAKEIT**, for make.fun bounty `makefun-coin-promo-01`
("Launch a coin that sells make.fun"). Creator wallet (linked to the entrant's
make.fun account): `3pyNCvoy6c4wVFHA7uno6wgYSaTsNicipXuY58noK18b`.

## The coin

- **Mint:** `J37Qsdqf56G8btyugZ6KKEN1FD6n3HTdF4aMVjAC9wEY`
- **Create transaction:** `3p3kDXMzcpidAakTFL4aTx3KizShE7wwcSQEXL51fVhFXk9Xm4vBtjm543ENz4b8rqLPEYD9NTavEdWdGPEpAfYu`
- **Created:** 2026-11-15 19:32:31 WIB (blocktime 1794745951, slot 469730691) — inside the
  competition window (opens 2026-11-15 13:00 WIB, closes 2026-11-17 13:00 WIB).
- **Coin page:** https://pump.fun/coin/J37Qsdqf56G8btyugZ6KKEN1FD6n3HTdF4aMVjAC9wEY
- **Route:** PumpPortal trade-local, create-only, amount 0 — no dev buy.
- **Programs in the create tx:** ComputeBudget + pump.fun
  (`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`).

## Metadata (verified before any spend)

- **metadataUri:** https://raw.githubusercontent.com/corruptors/makefun-coin-promo-01/main/metadata.json
  — HTTP 200, parses, byte-exact fields: name "Make it fun", symbol "MAKEIT", the four-line
  description (carries the bounty URL in full, says the coin is for this bounty, explains
  make.fun), website = the bounty URL, showName true, createdOn https://pump.fun.
- **Image:** https://files.catbox.moe/r25txr.png — the agent-drawn logo (white ghost holding a
  gold dollar coin, navy background, no text), PNG 1600×1600, sha256
  `22a477d89021504f3290e8fad4ee2755224d61f2cdce76f530126b9276e96273`, browser-verified
  displaying before launch. The metadata record itself is `metadata.json` in this repository.
- pump.fun's own `/api/ipfs` upload was not used: Cloudflare-blocked from our servers and
  HTTP 500 from a real browser (four attempts, two file sizes). Irys/arweave was not used:
  that is the route whose image URL 404 sank the first coin's entry (see README).

## Money — simulation gate, then broadcast

- Balance before the first attempt: 25,005,637 lamports (0.025005637 SOL).
- **Simulation 1 (no broadcast):** create valid (err = null, 108,096 units), simulated cost
  5,806,200 lamports, simulated post-balance 19,199,437 lamports — **below the 0.02 SOL
  reserve, so the launch held. Nothing was signed or sent.**
- Top-up received; balance before broadcast: 27,250,349 lamports (0.027250349 SOL).
- **Simulation 2 (same script, gate re-checked):** cost 5,806,200 lamports (≤ the 0.01 SOL
  launch cap), post-balance 21,444,149 lamports (≥ the 0.02 SOL reserve) — gate passed.
- **Actual spend: 5,806,200 lamports (0.0058062 SOL)** — exactly the simulated cost.
  Final wallet balance: 21,444,149 lamports (0.021444149 SOL).

## On-chain verification (after broadcast)

- Create tx: err = null, confirmed at slot 469730691, fee 15,000 lamports.
- Mint account: exists, Token-2022 (`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`),
  2,783,840 lamports, 420 bytes.
- Supply: 1,000,000,000 MAKEIT (1,000,000,000,000,000 raw, 6 decimals).
- Mint authority: null (tag 0) — the metadata can never be edited, which is why the
  pre-launch URL checks above mattered.
- Mint's metadata bytes contain the name, the symbol and this repository's metadata URI.
- Bonding curve: `2andwR6Si2PU9EDcqgRu83TxroX1r9bmFYXd9Y3wjcwx` exists, owned by the
  pump.fun program, 166 bytes; its associated token account
  (`4TsQpiz1egnp27PtikYiMtUDpmpuBmnteu1Knpvnv1RH`) holds the full 1B supply.
