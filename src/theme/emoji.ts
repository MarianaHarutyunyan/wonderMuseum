/**
 * Semantic icon keys mapped to their glyph. The app has no vector icon
 * library installed, so emoji are the production glyph set — always go
 * through this map (and the `Icon` component) rather than hardcoding an
 * emoji literal in a screen, so the whole glyph set can be swapped later.
 */
export const emoji = {
  star: "⭐",
  coin: "🪙",
  gem: "💎",
  energy: "⚡",
  fossil: "🦴",
  artifact: "🏺",
  creature: "🐚",

  dinosaur: "🦕",
  planet: "🪐",
  wave: "🌊",
  egypt: "🏛️",

  home: "🏠",
  worlds: "🗺️",
  museum: "🏛️",
  collection: "🎴",
  profile: "👤",

  back: "‹",
  forward: "›",
  close: "✕",
  settings: "⚙️",
  parent: "🔒",
  sound: "🔊",
  soundOff: "🔇",
  haptics: "📳",
  play: "▶️",
  lock: "🔒",
  check: "✓",
  plus: "➕",
  edit: "✏️",
  decorate: "🪄",

  gift: "🎁",
  missions: "📋",
  shop: "🛍️",
  trophy: "🏆",
  leaderboard: "📊",
  statistics: "📈",
  heart: "❤️",
  fire: "🔥",
  clock: "⏱️",
  crown: "👑",
  medal: "🥇",
  flag: "🚩",
} as const;

export type EmojiToken = keyof typeof emoji;
