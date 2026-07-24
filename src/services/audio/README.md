# services/audio/

Sound effect playback, backed by `expo-av`.

- `soundService` — loads and caches `Audio.Sound` instances by source and replays them on
  demand; exposes `unloadAll` for cleanup.

Consumed via `src/hooks/useSound`, which adds the settings-toggle check. No mini-game audio
content has been added yet — see `src/assets/audio` and `src/content/questions`.
