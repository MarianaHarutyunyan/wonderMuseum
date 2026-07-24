# components/

Reusable, presentation-only UI building blocks. Components here must be generic — no
knowledge of specific features, screens, or business logic. If a component only makes sense
for one feature, it belongs in `src/features/<feature>/components` instead.

## Subfolders

- `ui/` — atomic, generic UI primitives (buttons, cards, badges, dialogs, stat displays).
- `layout/` — structural/screen-level wrappers (safe area handling, header, bottom nav).
- `game/` — reusable gameplay-presentation components shared across mini-games (collectible
  glyphs, floating reward pops).

Every component resolves its colors via `useThemeColors()`, so the whole library supports
light and dark mode without per-component work.

## Rules

- No data fetching, no store access, no navigation logic.
- Props in, JSX out. Side effects belong in hooks or feature code, not here.
- Every component is exported through its subfolder's `index.ts` barrel.
