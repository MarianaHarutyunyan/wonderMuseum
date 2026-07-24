# app/world/

Route group for the world detail screen (`/world/[worldId]`).

## Responsibility

- `[worldId].tsx` reads the `worldId` route param, resolves the world via
  `src/features/worlds/utils/getWorldById`, and renders the world's mini-games and exhibits
  using `src/features/worlds` components.

Keep this file a thin composition layer — world lookup, progress logic, and rendering pieces
all live in `src/features/worlds`.
