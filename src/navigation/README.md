# navigation/

Route path constants and navigation helpers for `expo-router`. Screens and features should
never hand-build a route string (`` `/world/${id}` ``) — they should call a builder from here.

## Current exports

- `ROUTES` — `ROUTES.home`, `ROUTES.world(worldId)`.

## Rationale

Centralizing route paths means a route can be renamed/restructured in `app/` by updating one
file here, instead of hunting down every `router.push(...)` call across the codebase.
