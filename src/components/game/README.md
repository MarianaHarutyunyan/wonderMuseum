# components/game/

Reusable, presentation-only components shared across multiple mini-games and reward moments
(collectible glyphs, floating score pops, etc.).

## Current components

- `Coin.tsx` — glossy gradient coin glyph, optionally paired with a count.
- `Star.tsx` — gradient star glyph for ratings/rewards/unlocked-level indicators (filled or outline).
- `Gem.tsx`, `Energy.tsx` — gradient currency glyphs (gems, energy/lives).
- `Fossil.tsx`, `Artifact.tsx`, `Creature.tsx` — gradient collectible-type glyphs.
- `Trophy.tsx` — gradient achievement/rank glyph.
- `Dinosaur.tsx`, `Planet.tsx`, `Wave.tsx`, `Egypt.tsx` — gradient world-badge glyphs.
- `FloatingReward.tsx` — a reward label that rises and fades out (coin/star pickups, score pops).

These are the "hero" glyphs the `Icon` component (`src/components/ui/Icon`) dispatches to for
reward/world tokens; every other semantic token renders through the outline `GlyphIcon`
(`src/components/icons`).

## Rules

- Shared across two or more mini-games. A component used by exactly one mini-game belongs in
  that mini-game's own feature folder instead.
- No gameplay rules/scoring logic — presentation only, driven by props.
