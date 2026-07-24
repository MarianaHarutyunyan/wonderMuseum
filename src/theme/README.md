# theme/

Design tokens: the single source of truth for the Wonder Museum look — bright gradients,
rounded shapes, soft shadows, playful type. No component should hardcode a color, spacing
value, font size, radius, or shadow — it should reference a theme token.

## Tokens

- `colors.ts` — brand palette, backgrounds, text colors, reward colors, world themes, museum
  themes.
- `spacing.ts` — spacing scale.
- `radius.ts` — border radius scale, including the named `button`/`card`/`input`/`avatar`/
  `bottomSheet` tokens from the design spec.
- `typography.ts` — font families, font size scale, font weight scale, and named text variants
  (`titleXl`, `title`, `subtitle`, `body`, `small`, `caption`).
- `shadows.ts` — soft shadow presets (`sm`…`xl`) and a colored `glowShadow` for celebratory
  states. Never use flat/harsh Material-style elevation.
- `gradients.ts` — brand gradient pairs (`blue`, `purple`, `orange`, `pink`, `green`) plus
  start/end points for `expo-linear-gradient`.
- `icons.ts` — semantic icon key registry; components reference the key, not a raw asset name.
- `index.ts` — aggregates every token into a single `theme` object, re-exports each module, and
  composes `buttonVariants` / `cardVariants` (gradient + radius + shadow presets per variant).

## Convention

Import individual tokens (`colors`, `spacing`, `radius`, ...) for tree-shaking-friendly usage,
or the aggregated `theme` object when passing the whole token set (e.g. to a future theming
provider). Prefer rounded corners, soft/glow shadows, and bright gradients over flat fills —
never Material Design patterns (ripples, sharp elevation, FABs).
