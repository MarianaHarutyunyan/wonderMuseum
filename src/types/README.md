# types/

Shared TypeScript types used across multiple features or layers. A type used by only one
feature should live next to its usage in `src/features/<feature>` instead.

## Current types

- `world.types.ts` — `WorldConfig`, `MiniGameConfig`, `ExhibitConfig`, `MiniGameType`.
- `collectibles.types.ts` — `CollectibleType`, `CollectibleTotals`.

## Convention

Type-only modules — no runtime code. Import types explicitly with `import type` to keep them
erased at build time.
