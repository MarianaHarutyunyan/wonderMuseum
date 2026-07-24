# config/

App-level configuration and feature flags — technical settings about how the app behaves,
as opposed to `src/content` which is game/educational data.

## Current config

- `app.config.ts` — `APP_CONFIG`: app name, target age range, offline-only flag, and default
  values for sound/haptics settings.

## When to add here vs elsewhere

- A value that changes app *behavior* (feature flags, defaults, environment-level settings) →
  `config/`.
- A value that's raw and fixed with no business meaning (a storage key) → `src/constants`.
- A value that's game/educational data (a world, a question) → `src/content`.
