# src/

Application source root. Everything the app needs that is **not** a route lives here. `app/`
stays a thin routing layer; `src/` is where the real implementation lives.

## Layout

| Folder | Responsibility |
| --- | --- |
| `components/` | Reusable, presentation-only UI components (no business logic). |
| `features/` | Vertical feature modules — domain logic + the components/hooks that use it. |
| `hooks/` | Cross-feature, app-wide React hooks. |
| `store/` | Global Zustand state stores. |
| `services/` | Wrappers around native/third-party APIs (storage, audio, haptics). |
| `types/` | Shared TypeScript types used across the app. |
| `constants/` | Fixed primitive values with no business meaning (storage keys, limits). |
| `theme/` | Design tokens (colors, spacing, typography). |
| `utils/` | Small, pure, stateless helper functions. |
| `content/` | Game/educational domain data (worlds, questions, museum, rewards). |
| `config/` | App-level configuration and feature flags. |
| `navigation/` | Route constants and navigation helpers for `expo-router`. |
| `animations/` | Shared Reanimated timing/easing/scale tokens. |
| `assets/` | In-app runtime assets (images, icons, fonts, audio, lottie). |

## Import rules

- Import via path aliases (`@components`, `@features`, `@hooks`, `@store`, `@services`,
  `@theme`, `@content`, `@config`, `@navigation`, `@animations`, `@assets`, or the generic `@/*`)
  — never deep relative paths like `../../../`.
- `content/` and `config/` are deliberately separate: `content` is game/design data that a
  writer or designer might edit; `config` is technical/app-level settings.
- Every folder exposes a barrel `index.ts` — import from the folder, not the file, unless
  working inside that folder itself.
