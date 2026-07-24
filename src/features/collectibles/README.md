# features/collectibles/

Display of the player's collectible totals (stars, coins, fossils, artifacts, creatures).

## Contents

- `components/CollectibleBadge` — single collectible type + count.
- `components/CollectibleSummaryBar` — horizontal scroll of all collectible badges, reading
  live totals from `src/store/progressStore`.

## Depends on

- `src/content/rewards` for collectible type metadata.
- `src/store` for live totals.
