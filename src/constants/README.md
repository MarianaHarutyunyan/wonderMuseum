# constants/

Fixed primitive values with no business meaning of their own — the kind of value that would
otherwise be a magic string/number scattered across the codebase.

## Current constants

- `storageKeys.ts` — MMKV instance id and Zustand `persist` store names.

## constants/ vs config/ vs content/

- `constants/` — raw fixed values (storage keys, limits). Never conditional, never editable
  by a non-engineer.
- `config/` — app-level settings/feature flags (`src/config`).
- `content/` — game/educational domain data a designer or writer might edit (`src/content`).
