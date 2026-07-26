import { colors, museumThemes, palette, rewardColors, worldThemes } from './colors';
import { gradientAngles, gradients } from './gradients';
import { emoji } from './emoji';
import { radius } from './radius';
import { glowShadow, shadows } from './shadows';
import { spacing } from './spacing';
import { fontFamily, fontSize, fontWeight, textVariants } from './typography';

/** Button style presets — gradient + text color + radius + shadow. */
export const buttonVariants = {
  primary: { gradient: gradients.gold, textColor: colors.onGold, radius: radius.button, shadow: glowShadow(colors.primary) },
  info: { gradient: gradients.blue, textColor: colors.white, radius: radius.button, shadow: glowShadow(colors.info) },
  secondary: { gradient: gradients.purple, textColor: colors.white, radius: radius.button, shadow: glowShadow(colors.purple) },
  success: { gradient: gradients.green, textColor: colors.white, radius: radius.button, shadow: glowShadow(colors.green) },
  warning: { gradient: gradients.orange, textColor: colors.white, radius: radius.button, shadow: glowShadow(colors.orange) },
  danger: { gradient: [colors.error, colors.pink] as const, textColor: colors.white, radius: radius.button, shadow: glowShadow(colors.error) },
  ghost: { gradient: [colors.surfaceElevated, colors.surfaceElevated] as const, textColor: colors.textPrimary, radius: radius.button, shadow: shadows.sm },
} as const;

export type ButtonVariantToken = keyof typeof buttonVariants;

/** Card style presets — background + radius + shadow + border. */
export const cardVariants = {
  default: { background: colors.surface, radius: radius.card, shadow: shadows.md, borderColor: colors.transparent },
  elevated: { background: colors.surface, radius: radius.card, shadow: shadows.lg, borderColor: colors.transparent },
  dark: { background: colors.cardDark, radius: radius.card, shadow: shadows.lg, borderColor: colors.transparent },
  outlined: { background: colors.surface, radius: radius.card, shadow: shadows.sm, borderColor: colors.border },
} as const;

export type CardVariantToken = keyof typeof cardVariants;

export const theme = {
  colors,
  palette,
  spacing,
  radius,
  fontFamily,
  fontSize,
  fontWeight,
  textVariants,
  shadows,
  gradients,
  gradientAngles,
  emoji,
  rewardColors,
  worldThemes,
  museumThemes,
  buttonVariants,
  cardVariants,
} as const;

export type Theme = typeof theme;

export * from './colors';
export * from './spacing';
export * from './radius';
export * from './typography';
export * from './shadows';
export * from './gradients';
export * from './emoji';
