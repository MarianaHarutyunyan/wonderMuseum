# components/game/

Reusable, presentation-only components shared across multiple mini-games and reward moments
(collectible glyphs, floating score pops, etc.).

## Current components

- `Coin.tsx` — gold coin glyph, optionally paired with a count.
- `Star.tsx` — star glyph for ratings/rewards/unlocked-level indicators (filled or outline).
- `FloatingReward.tsx` — a reward label that rises and fades out (coin/star pickups, score pops).

## Rules

- Shared across two or more mini-games. A component used by exactly one mini-game belongs in
  that mini-game's own feature folder instead.
- No gameplay rules/scoring logic — presentation only, driven by props.
