# TESTS — how each claim in CHECK.md was tested

All tests were run by the agent on 2026-11-15 (WIB) against Solana mainnet and the
live repository. Nothing here is asserted from memory; each line names its method.

## Metadata before launch

1. **metadataUri serves** — `GET https://raw.githubusercontent.com/corruptors/makefun-coin-promo-01/main/metadata.json`
   returned HTTP 200 (the launch script fetches and parses it before doing anything else;
   it aborts if the status is not 200).
2. **Fields byte-exact** — the parsed JSON was compared field by field with the intended
   record: name, symbol, the four description lines (including the em-dash line), image,
   website, showName, createdOn. Any mismatch aborts the launch script.
3. **Logo is the intended file** — the local source PNG's sha256
   (`22a477d89021504f3290e8fad4ee2755224d61f2cdce76f530126b9276e96273`) is hard-checked by
   the launch script against the fixed parameter before broadcast; the hosted copy at
   files.catbox.moe was opened in a real browser and seen displaying (1600×1600, the ghost
   and gold coin) before the metadata was written. (This machine's direct egress cannot
   fetch catbox — connection reset — so the display check was done in the browser, the
   same vantage point the judge's fetcher has.)

## The create

4. **Simulation before broadcast, twice** — the launch script builds the create via
   PumpPortal trade-local and simulates it with the creator account requested back, so
   the exact cost is known pre-broadcast. Run 1: err = null, cost 5,806,200 lamports,
   post-balance 19,199,437 → gate (post ≥ 20,000,000) failed → **no broadcast, and the
   wallet balance afterwards was unchanged (25,005,637), proving nothing was sent.**
   Run 2 (after top-up): err = null, 105,096 units, same cost, post-balance 21,444,149
   → gate passed → broadcast.
5. **Actuals match the simulation** — the confirmed spend was exactly 5,806,200 lamports
   and the final balance exactly the simulated post-balance (21,444,149).

## On-chain state after broadcast

6. **Transaction** — `getTransaction` on the create signature: err = null, slot 469730691,
   blockTime 1794745951 (inside the competition window), fee 15,000 lamports.
7. **Mint** — `getAccountInfo` + parsed token supply: Token-2022 mint, supply
   1,000,000,000,000,000 raw at 6 decimals = 1,000,000,000 MAKEIT; mint authority tag 0
   (null). The mint's raw data was searched for the metadata URI, the name and the
   symbol — all three present.
8. **Bonding curve** — the pump.fun bonding-curve PDA derived from the mint
   (`2andwR6Si2PU9EDcqgRu83TxroX1r9bmFYXd9Y3wjcwx`) exists and is owned by the pump.fun
   program; its associated token account (derived with the Token-2022 program id) holds
   the full 1B supply, i.e. the whole supply sits in the curve, untouched — consistent
   with a create-only launch with no dev buy.

## This program (main.ts)

9. **Grader-style run** — `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   run twice: both runs print the same four lines (copy path, mint, create signature,
   coin page) and `out/LAUNCH.json` is byte-identical to the repository's `LAUNCH.json`
   (compared with `cmp`). The program reads no clock, no network and no file outside the
   repository, so the determinism is structural, not luck.
10. **Kit check** — `makefun check` against this commit and the submitted transcript
    bundle: see the entry notes for the final counts (must be 0 failed before submit).
