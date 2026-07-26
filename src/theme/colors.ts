/**
 * Raw brand palette. Reach for `colors` (the semantic export below) in
 * components — use `palette` only when defining new semantic tokens here
 * (gradients, themes, reward colors).
 *
 * Wonder Museum uses a single premium dark-violet "kids game" theme — a
 * deep navy/violet background, glassy `#22295C` panels, and saturated
 * candy-bright accent gradients per world/reward. Values match the
 * official Wonder Museum UI Design Specification exactly.
 */
export const palette = {
  blue: '#6D8BFF',
  sky: '#00D4FF',
  purple: '#A066FF',
  violet: '#B57DFF',
  pink: '#FF5D88',
  gold: '#FFC93A',
  amber: '#FFC93A',
  orange: '#FF8A00',
  green: '#39D98A',
  lightGreen: '#7CF0B2',
  success: '#39D98A',
  error: '#FF5D88',
  warning: '#FFB54D',
} as const;

export const backgroundColors = {
  background: '#101238',
  backgroundSecondary: '#1A1F4D',
  card: '#22295C',
  cardDark: '#1A1F4D',
} as const;

export const textColors = {
  title: '#FFFFFF',
  body: '#A6B0E6',
  caption: '#8189C2',
} as const;

/** One accent color per collectible/reward type. */
export const rewardColors = {
  star: palette.gold,
  coin: palette.amber,
  fossil: palette.orange,
  artifact: palette.blue,
  creature: palette.pink,
} as const;

export type RewardColorToken = keyof typeof rewardColors;

/** Per-world accent theme: a signature color + gradient for each world. */
export const worldThemes = {
  dinosaur: { accent: rewardColors.fossil, gradient: [palette.orange, palette.gold] } as const,
  space: { accent: rewardColors.artifact, gradient: [palette.blue, palette.sky] } as const,
  ocean: { accent: rewardColors.creature, gradient: [palette.pink, '#FF8EE8'] } as const,
} as const;

export type WorldThemeToken = keyof typeof worldThemes;

/** Broad museum-section theme used for map/menu chrome. */
export const museumThemes = {
  history: { accent: palette.orange, gradient: [palette.orange, palette.gold] } as const,
  nature: { accent: palette.green, gradient: [palette.green, palette.lightGreen] } as const,
  space: { accent: palette.blue, gradient: [palette.blue, palette.sky] } as const,
  art: { accent: palette.purple, gradient: [palette.purple, palette.violet] } as const,
} as const;

export type MuseumThemeToken = keyof typeof museumThemes;

export const colors = {
  primary: palette.blue,
  primaryLight: palette.sky,
  info: palette.blue,
  sky: palette.sky,
  purple: palette.purple,
  pink: palette.pink,
  yellow: palette.gold,
  gold: palette.gold,
  orange: palette.orange,
  green: palette.green,
  lightGreen: palette.lightGreen,
  success: palette.success,
  error: palette.error,
  danger: palette.error,
  warning: palette.warning,

  background: backgroundColors.background,
  backgroundSecondary: backgroundColors.backgroundSecondary,
  surface: backgroundColors.card,
  surfaceElevated: '#2A2F66',
  cardDark: backgroundColors.cardDark,

  textPrimary: textColors.title,
  textSecondary: textColors.body,
  textMuted: textColors.caption,

  accentGold: rewardColors.star,
  accentCoin: rewardColors.coin,
  accentFossil: rewardColors.fossil,
  accentArtifact: rewardColors.artifact,
  accentCreature: rewardColors.creature,

  border: 'rgba(166, 176, 230, 0.18)',
  overlay: 'rgba(16, 18, 56, 0.65)',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  onGold: '#241A46',
} as const;

export type ColorToken = keyof typeof colors;

/** Same dark theme surfaced under the `dark` key — the app has one visual theme, not an adaptive scheme. */
export const darkColors: Record<ColorToken, string> = {
  ...colors,
};

export type ColorScheme = 'light' | 'dark';

/** The full color set for each scheme — index with a resolved `ColorScheme`. */
export const themes: Record<ColorScheme, Record<ColorToken, string>> = {
  light: colors,
  dark: darkColors,
};
