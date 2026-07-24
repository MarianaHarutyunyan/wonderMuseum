# services/haptics/

Haptic feedback, backed by `expo-haptics`.

- `hapticsService` — thin map of named triggers (`light`, `medium`, `heavy`, `success`,
  `warning`, `error`) to the underlying `expo-haptics` calls.

Consumed via `src/hooks/useHaptics`, which adds the settings-toggle check.
