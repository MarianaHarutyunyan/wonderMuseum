# components/icons/

Outline SVG glyph set — the "premium line icon" style used for navigation, actions, and
list/social icons (everything that isn't a reward/world "hero" glyph; those live in
`src/components/game`).

## Contents

- `GlyphIcon.tsx` — a single component rendering a 24x24 outline glyph from the `GLYPHS`
  registry, keyed by `GlyphToken`. Consistent stroke width, rounded caps/joins.

## Rules

- Don't call `GlyphIcon` directly from a screen — go through `src/components/ui/Icon`, which
  resolves a semantic `EmojiToken` to the right glyph (hero or outline) in one place.
- Adding a new semantic icon: add the token to `src/theme/emoji.ts`, add its shape to
  `GLYPHS` here (or to `src/components/game` if it needs a gradient "hero" treatment), and wire
  it into the `Icon` switch.
