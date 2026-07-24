# app/

Expo Router route tree. Every file here maps directly to a URL/screen — this folder owns
**navigation structure only**.

## Responsibility

- Route files (`index.tsx`, `[param].tsx`, `_layout.tsx`) that wire screens into the router.
- Layout composition (providers, stacks, tab bars) via `_layout.tsx` files.
- Reading route params (`useLocalSearchParams`) and delegating to `src/features/*` for logic.

## What does NOT belong here

- Business logic, data fetching, or state management — put it in `src/features/*` or `src/store/`.
- Reusable UI — put it in `src/components/*`.
- Screens should stay thin: compose feature components, nothing more.

## Conventions

- One route = one file, named per [Expo Router file-based routing](https://docs.expo.dev/router/introduction/).
- Dynamic segments use `[param].tsx`.
- Route path constants/builders live in `src/navigation`, not hardcoded strings.
