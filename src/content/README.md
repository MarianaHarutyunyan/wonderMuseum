# content/

Game and educational domain data — the "content" a designer, writer, or educator might edit
without touching app logic. This is intentionally separate from `src/config` (technical
settings) and from `src/features` (the code that renders this data).

## Subfolders

- `worlds/` — museum world definitions: mini-games and the exhibits they unlock.
- `questions/` — quiz/question bank for mini-games (reserved; no gameplay built yet).
- `museum/` — museum-wide layout/growth-stage data, distinct from per-world exhibits
  (reserved; no gameplay built yet).
- `rewards/` — collectible type definitions (stars, coins, fossils, artifacts, creatures).

## Rules

- Pure data modules — `readonly` arrays/objects, typed via `src/types`. No React, no logic
  beyond simple lookups.
- Content should be safe to hand to a non-engineer to edit (as JSON-like TS objects) without
  needing to understand the rest of the app.
