# features/worlds/

Everything related to browsing museum worlds, their mini-games, and their exhibits.

## Contents

- `components/` — `WorldCard`, `WorldList`, `MiniGameRow`, `ExhibitCard`.
- `hooks/` — `useWorldProgress`, which reads/writes world-related progress in `src/store`.
- `utils/` — `getWorldById`, a pure lookup helper over `src/content/worlds`.

## Depends on

- `src/content/worlds` for world definitions.
- `src/store` for persisted progress.
- `src/components/ui`, `src/theme` for presentation.
