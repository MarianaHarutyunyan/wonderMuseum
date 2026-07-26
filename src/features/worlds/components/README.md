# features/worlds/components/

UI specific to the worlds feature — not reusable outside of it (unlike `src/components/ui`).

- `WorldListItem` — binds a `WorldConfig` to the themed `WorldCard`, resolving live progress.
- `WorldList` — FlashList wrapper rendering `WorldListItem` items.
- `LevelTile` — a numbered level-select grid tile with stars/lock state.
- `ExhibitCard` — an exhibit with its locked/unlocked state.
