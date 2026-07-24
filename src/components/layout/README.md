# components/layout/

Structural components that shape a screen: safe-area handling, page scaffolding, navigation
chrome. These wrap `ui/` primitives and screen content but never contain business logic.

## Current components

- `ScreenContainer` — safe-area-aware root wrapper used by every route in `app/`; background
  resolves via `useThemeColors()` for light/dark mode.
- `Header` — screen header with optional back button, title, and right-side action.
- `BottomNavigation` — rounded floating tab bar with an active-tab pill highlight.

Import via the barrel: `import { ScreenContainer, Header, BottomNavigation } from '@components/layout';`
