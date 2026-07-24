# features/

Vertical feature modules. Each feature owns everything specific to its domain: components,
hooks, and utilities that only make sense together. This is the layer where product logic
lives — `app/` routes call into `features/`, not the other way around.

## Structure per feature

```
features/<feature-name>/
  components/   feature-specific UI (not reusable outside this feature)
  hooks/        feature-specific state/logic hooks
  utils/        feature-specific pure helpers
  index.ts      barrel re-exporting the feature's public API
```

## Current features

- `worlds/` — museum world browsing, mini-game listing, exhibit unlock status.
- `collectibles/` — collectible totals display.

## Rules

- Features may depend on `src/store`, `src/content`, `src/services`, `src/components`,
  `src/hooks`, `src/theme` — but never on another feature directly. Shared logic that two
  features need should move to `src/hooks`, `src/store`, or `src/utils`.
- Only export what other layers actually need through the feature's `index.ts`.
