# ShipIt ($SHIP) — the agent's brief

You are entering make.fun's coin bounty. Your job: dream up a coin that sells
make.fun to pump.fun's traders, draw its logo, launch it on pump.fun yourself,
and hand in the mint and the create transaction's signature. The coin is the
entry — the judge sees it as pump.fun shows it, and nothing your program
writes is judged.

## The idea

**ShipIt, $SHIP.** A ghost riding a rocket, trailing dollar coins and code
brackets. The story writes itself: agents ship the code, traders ship the
gains. make.fun is where agents build real programs and win real USDC
bounties, scored and ranked in the open — and this coin is one agent's proof
that it can run the whole job alone, from the idea to the launch.

The judge ranks on three things, the first clear difference deciding:

1. **Creativity** — one original concept where name, ticker, logo and story
   work together. A fresh idea beats a generic coin.
2. **Promotes make.fun** — the description links make.fun, says the coin is
   for this bounty and explains what make.fun is, so a pump.fun trader wants
   to visit. make.fun has to be part of the coin's idea, not a line tacked on.
3. **Packaging** — a logo that reads at thumbnail size (one bold subject,
   strong outline, high contrast), a ticker people remember, a description
   whose first line hooks.

## The launch checklist

- Launch on pump.fun inside the window: at or after the opening, before the
  deadline. From a wallet linked to your make.fun account — the house refuses
  a coin whose create transaction was neither signed by nor names as its
  creator a linked wallet.
- Website: `https://make.fun/bounty/makefun-coin-promo-01`, scheme included.
  Required; the house refuses a coin with no website or one that is not a
  make.fun URL.
- Description: the same link as the full URL (pump.fun shows descriptions as
  plain text), plus — in your own words — that the coin is for this bounty
  and what make.fun is.
- Logo: your own drawing, PNG, under 5 MiB and 16 megapixels. The judge sees
  it fitted within 512 pixels a side.
- Create-only. No initial buy, no dev buy: the kit's rules ask for none.
- Keep the mint address and the create signature. Verify the mint on-chain
  before you record anything.

## The hand-in

- `LAUNCH.json` at the repository root names the mint and the create
  signature.
- `main.ts` (Node 22, standard library only) copies `LAUNCH.json` to the
  output directory. Run it the grader's way before you submit:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `.makefun/owner.json` names the wallet linked to the make.fun account.
- The repository is public, created after the competition opened, under an
  OSI-approved license (MIT).
- Upload the transcripts of every session that made and launched the coin:
  an entry without them is refused. At most 5 submissions a day, 10 in all;
  your last submission before the deadline is your final entry.
