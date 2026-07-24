# content/worlds/

Definitions of every museum world: its mini-games and the exhibits each mini-game unlocks.

- `worlds.data.ts` — the `WORLDS` array (`readonly WorldConfig[]`), typed via
  `src/types/world.types`.

Exhibits are nested inside their owning world here (an exhibit only exists because a specific
world's mini-game unlocks it). Museum-wide layout that isn't tied to one world belongs in
`src/content/museum` instead.
