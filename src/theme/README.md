# theme/

Design tokens: the single source of truth for the Wonder Museum look — a premium dark-navy
game theme with gold as the primary CTA color, glossy gradients, rounded shapes, and soft
shadows. No component should hardcode a color, spacing value, font size, radius, or shadow —
it should reference a theme token.

## Tokens

- `colors.ts` — brand palette, backgrounds, text colors, reward colors, world themes, museum
  themes. `colors` (and `themes.light`) is the one shipped palette — dark navy background,
  glassy panel surfaces, gold `primary`. `darkColors`/`themes.dark` is a deeper night variant
  for `useThemeColors('dark')` call sites.
- `spacing.ts` — spacing scale.
- `radius.ts` — border radius scale, including the named `button`/`card`/`input`/`avatar`/
  `bottomSheet` tokens from the design spec.
- `typography.ts` — font families, font size scale, font weight scale, and named text variants
  (`titleXl`, `title`, `subtitle`, `body`, `small`, `caption`).
- `shadows.ts` — soft shadow presets (`sm`…`xl`) and a colored `glowShadow` for celebratory
  states. Never use flat/harsh Material-style elevation.
- `gradients.ts` — brand gradient pairs (`blue`, `purple`, `orange`, `pink`, `green`, `gold`,
  `navy`) plus start/end points for `expo-linear-gradient`.
- `emoji.ts` — semantic icon key registry (`EmojiToken`). Components never hardcode an emoji or
  icon name — they go through `src/components/ui/Icon`, which resolves the token to a gradient
  "hero" glyph (`src/components/game`) or an outline `GlyphIcon` (`src/components/icons`).
- `index.ts` — aggregates every token into a single `theme` object, re-exports each module, and
  composes `buttonVariants` / `cardVariants` (gradient + radius + shadow presets per variant).

## Convention

Import individual tokens (`colors`, `spacing`, `radius`, ...) for tree-shaking-friendly usage,
or the aggregated `theme` object when passing the whole token set (e.g. to a future theming
provider). Prefer rounded corners, soft/glow shadows, and bright gradients over flat fills —
never Material Design patterns (ripples, sharp elevation, FABs).
