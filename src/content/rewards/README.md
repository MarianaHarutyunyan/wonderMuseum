# content/rewards/

Definitions of every collectible type the player can earn.

- `collectibles.data.ts` — `COLLECTIBLE_TYPES`, mapping each `CollectibleType` (from
  `src/types/collectibles.types`) to its label, icon, and theme color token.

Live totals per type are runtime state, tracked in `src/store/progressStore` — this folder
only defines the static metadata about each type.
