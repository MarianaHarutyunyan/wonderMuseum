# store/

Global application state, managed with Zustand. Anything that needs to be read or written
from multiple features lives here; state local to one component should just use `useState`.

## Current stores

- `progressStore` — collectibles totals, unlocked exhibits, completed mini-games. Persisted.
- `settingsStore` — sound/haptics toggles. Persisted.

## Conventions

- Every persisted store uses `zustand/middleware`'s `persist` with the MMKV-backed storage
  adapter from `src/services/storage`, keyed by a name from `src/constants`.
- Stores expose actions as part of the same hook — no separate action-dispatch layer.
- Select only the slice you need: `useProgressStore((state) => state.collectibles)`, not the
  whole store, to avoid unnecessary re-renders.
