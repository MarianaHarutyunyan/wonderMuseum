/**
 * Semantic icon keys. Screens/components reference the semantic key
 * (`icons.star`) — never a raw asset name — so the underlying glyph or asset
 * can be swapped in one place.
 */
export const icons = {
  star: 'star',
  coin: 'coin',
  fossil: 'fossil',
  artifact: 'artifact',
  creature: 'creature',

  dinosaur: 'dinosaur',
  planet: 'planet',
  wave: 'wave',

  back: 'back',
  close: 'close',
  settings: 'settings',
  sound: 'sound',
  soundOff: 'sound-off',
  play: 'play',
  lock: 'lock',
  check: 'check',
  home: 'home',
} as const;

export type IconToken = keyof typeof icons;
