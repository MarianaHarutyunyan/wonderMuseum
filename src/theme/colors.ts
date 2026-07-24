/**
 * Raw brand palette. Reach for `colors` (the semantic export below) in
 * components — use `palette` only when defining new semantic tokens here
 * (gradients, themes, reward colors).
 */
export const palette = {
  blue: '#4F8CFF',
  sky: '#6ED8FF',
  purple: '#8A6DFF',
  pink: '#FF71C8',
  yellow: '#FFD54A',
  orange: '#FF9B4A',
  green: '#5EDB7E',
  success: '#35D07F',
  error: '#FF5F6D',
  warning: '#FFB547',
} as const;

export const backgroundColors = {
  background: '#EAF8FF',
  backgroundSecondary: '#F7FCFF',
  card: '#FFFFFF',
  cardDark: '#2C3E68',
} as const;

export const textColors = {
  title: '#23365D',
  body: '#54698D',
  caption: '#88A1C5',
} as const;

/** One accent color per collectible/reward type. */
export const rewardColors = {
  star: palette.yellow,
  coin: palette.orange,
  fossil: '#C99A5B',
  artifact: palette.sky,
  creature: palette.pink,
} as const;

export type RewardColorToken = keyof typeof rewardColors;

/** Per-world accent theme: a signature color + gradient for each world. */
export const worldThemes = {
  dinosaur: { accent: rewardColors.fossil, gradient: [palette.orange, palette.yellow] } as const,
  space: { accent: rewardColors.artifact, gradient: [palette.blue, palette.sky] } as const,
  ocean: { accent: rewardColors.creature, gradient: [palette.pink, '#FF9FE3'] } as const,
} as const;

export type WorldThemeToken = keyof typeof worldThemes;

/** Broad museum-section theme used for map/menu chrome. */
export const museumThemes = {
  history: { accent: palette.orange, gradient: [palette.orange, palette.yellow] } as const,
  nature: { accent: palette.green, gradient: [palette.green, '#9BF3A3'] } as const,
  space: { accent: palette.blue, gradient: [palette.blue, palette.sky] } as const,
  art: { accent: palette.purple, gradient: [palette.purple, '#B57DFF'] } as const,
} as const;

export type MuseumThemeToken = keyof typeof museumThemes;

export const colors = {
  primary: palette.blue,
  primaryLight: palette.sky,
  sky: palette.sky,
  purple: palette.purple,
  pink: palette.pink,
  yellow: palette.yellow,
  orange: palette.orange,
  green: palette.green,
  success: palette.success,
  error: palette.error,
  danger: palette.error,
  warning: palette.warning,

  background: backgroundColors.background,
  backgroundSecondary: backgroundColors.backgroundSecondary,
  surface: backgroundColors.card,
  surfaceElevated: backgroundColors.backgroundSecondary,
  cardDark: backgroundColors.cardDark,

  textPrimary: textColors.title,
  textSecondary: textColors.body,
  textMuted: textColors.caption,

  accentGold: rewardColors.star,
  accentCoin: rewardColors.coin,
  accentFossil: rewardColors.fossil,
  accentArtifact: rewardColors.artifact,
  accentCreature: rewardColors.creature,

  border: 'rgba(35, 54, 93, 0.12)',
  overlay: 'rgba(35, 54, 93, 0.45)',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ColorToken = keyof typeof colors;

/** Dark-mode counterpart of `colors` — same keys, night-sky background. */
export const darkColors: Record<ColorToken, string> = {
  ...colors,

  background: '#141B33',
  backgroundSecondary: '#1B2247',
  surface: backgroundColors.cardDark,
  surfaceElevated: '#374873',
  cardDark: '#1B2247',

  textPrimary: '#FFFFFF',
  textSecondary: '#B8C4E0',
  textMuted: '#7C89B3',

  border: 'rgba(255, 255, 255, 0.12)',
  overlay: 'rgba(10, 14, 30, 0.6)',
};

export type ColorScheme = 'light' | 'dark';

/** The full color set for each scheme — index with a resolved `ColorScheme`. */
export const themes: Record<ColorScheme, Record<ColorToken, string>> = {
  light: colors,
  dark: darkColors,
};
