# services/storage/

Key-value persistence, backed by `react-native-mmkv`.

- `mmkv` — the raw MMKV instance, id sourced from `src/constants`.
- `zustandMmkvStorage` — a `StateStorage` adapter so Zustand's `persist` middleware can read
  and write through MMKV instead of `AsyncStorage`.

All data is local-only today (no backend). If a backend is added later, this is the layer
that would gain a sync/remote counterpart — stores themselves shouldn't need to change.
