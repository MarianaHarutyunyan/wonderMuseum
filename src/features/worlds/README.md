# features/worlds/

Everything related to browsing museum worlds, their levels, and their exhibits.

## Contents

- `components/` — `WorldListItem`, `WorldList`, `LevelTile`, `ExhibitCard`.
- `hooks/` — `useWorldProgress` (level/exhibit unlock state) and `useWorldSummary` (per-world completion fraction).
- `utils/` — `getWorldById`, a pure lookup helper over `src/content/worlds`.

## Depends on

- `src/content/worlds` for world definitions.
- `src/store` for persisted progress.
- `src/components/ui`, `src/theme` for presentation.
