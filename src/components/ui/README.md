# components/ui/

Atomic, generic UI primitives: the smallest reusable visual building blocks in the app
(buttons, cards, badges, dialogs, stat displays).

## Responsibility

- Purely presentational — accept props, render UI, expose event callbacks.
- Styled exclusively from `src/theme` tokens. No inline magic numbers/colors.
- Every component resolves colors via `useThemeColors()`, so it renders correctly in both
  light and dark mode automatically (device color scheme, or an explicit override).
- No awareness of game content, screens, or navigation.

## Current components

- `AppText` — themed text primitive; either a named `variant` (titleXl/title/subtitle/body/
  small/caption) or manual `size`/`weight`.
- `AnimatedButton` — generic press-scale + haptic wrapper; the animation primitive other
  pressables build on.
- `GradientButton` — bare gradient-filled pressable surface.
- `AppButton` — themed button composing `GradientButton` + `AppText`, driven by
  `buttonVariants` (primary/secondary/success/warning/danger/ghost).
- `Card` — generic surface container, driven by `cardVariants` (default/elevated/dark/
  outlined); optionally pressable.
- `GlassCard` — frosted/blurred translucent card for overlays and floating chrome.
- `Avatar` — circular avatar with image or initial fallback.
- `ProgressBar` — animated gradient-fill progress track.
- `Badge` — small filled/outline pill label.
- `Modal` — centered modal sheet with fading backdrop; the base every dialog builds on.
- `Dialog` — alert-style modal: title, message, action buttons.
- `RewardCard` / `StatCard` — icon + count/value + label cards for collectibles and stats.
- `MuseumCard` — museum-section card with a gradient header band.
- `WorldCard` — full-bleed gradient world card with progress.
- `Counter` — animated count-up/down number display.
- `Toast` — transient top-of-screen notification banner.
- `Icon` — semantic glyph renderer; dispatches to a gradient "hero" glyph (`src/components/game`)
  for reward/world tokens or an outline `GlyphIcon` (`src/components/icons`) for everything else.
- `IconButton` — rounded surface button wrapping a single `Icon`, with an optional count badge.
- `CurrencyPill` — icon + amount pill, with an optional "+" add action (coins/gems/energy HUD).
- `SegmentedTabs` — pill-style segmented control.
- `GridTile` — square collectible/exhibit thumbnail tile with a locked state.
- `OptionButton` — quiz-answer button that recolors to correct/incorrect.
- `ListRow` — icon + title + optional progress row (missions/statistics lists).
- `ToggleSwitch` — rounded pill switch.
- `CelebrationOverlay` — full-bleed gradient celebration screen (Correct/Level Complete/New
  Exhibit all build on this).

Import via the barrel: `import { AppButton, AppText, Card } from '@components/ui';`
