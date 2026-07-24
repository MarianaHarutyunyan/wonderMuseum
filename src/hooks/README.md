# hooks/

App-wide React hooks used by more than one feature. Feature-specific hooks belong in
`src/features/<feature>/hooks` instead.

## Current hooks

- `useHaptics` — triggers haptic feedback, respecting the user's settings toggle.
- `useSound` — plays a sound effect, respecting the user's settings toggle.

Both hooks wrap a `src/services` module and read `src/store/settingsStore` so feature code
never has to check the settings flag itself.
