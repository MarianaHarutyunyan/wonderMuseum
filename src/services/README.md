# services/

Thin wrappers around native modules and third-party APIs. Services isolate the rest of the
app from a specific vendor package — if we swap MMKV, expo-av, or expo-haptics for something
else, only the relevant service file changes.

## Subfolders

- `storage/` — MMKV key-value storage + the Zustand persistence adapter.
- `audio/` — sound effect playback (`expo-av`).
- `haptics/` — haptic feedback (`expo-haptics`).

## Rules

- Services have no React dependency and no knowledge of app state — they are plain
  classes/functions. Anything reactive (respecting a settings toggle, etc.) belongs in
  `src/hooks`, which wraps the service.
- Services never import from `src/features` or `src/store` (except the storage adapter, which
  Zustand's `persist` middleware consumes, not the other way around).
