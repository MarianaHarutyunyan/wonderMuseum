# animations/

Shared Reanimated tokens — durations, scales, and (in future) easing/spring configs. Keeps
animation timing consistent across the app and configurable from one place instead of magic
numbers scattered inside components.

## Current tokens

- `durations.ts` — `ANIMATION_DURATION_MS` (press feedback, screen transitions, celebrations).
- `scales.ts` — `PRESS_SCALE` (press-down scale factors).

## Convention

Components import these tokens rather than hardcoding `withTiming(x, { duration: 100 })`
inline.
