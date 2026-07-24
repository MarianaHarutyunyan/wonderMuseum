# assets/

In-app runtime assets — media consumed by components and `src/content` while the game is
running (mini-game images, exhibit icons, sound effects, animations).

This is **not** the same as the top-level `/assets` folder at the project root, which holds
Expo's static app-identity assets (app icon, splash screen, favicon) referenced by
`app.json`. Keep that distinction: app-identity assets vs. in-app content assets.

## Subfolders

- `images/` — static images (illustrations, backgrounds, exhibit art).
- `icons/` — small UI/iconography assets.
- `fonts/` — custom font files, loaded via `expo-font`.
- `audio/` — sound effects and music, played via `src/services/audio`.
- `lottie/` — Lottie animation JSON files.

## Status

Folders are reserved and currently empty — no gameplay assets have been added yet.

## Convention

Reference assets via the `@assets/*` path alias, e.g.
`require('@assets/images/museum-entrance.png')`.
