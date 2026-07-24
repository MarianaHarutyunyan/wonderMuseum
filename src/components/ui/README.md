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
- `LevelCard` — numbered level card with progress bar and locked state.
- `WorldCard` — full-bleed gradient world card with progress.
- `Counter` — animated count-up/down number display.
- `Toast` — transient top-of-screen notification banner.

Import via the barrel: `import { AppButton, AppText, Card } from '@components/ui';`
