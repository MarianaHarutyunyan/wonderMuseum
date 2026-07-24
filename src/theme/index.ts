import { colors } from './colors';
import { radius, spacing } from './spacing';
import { fontSize, fontWeight } from './typography';

export const theme = {
  colors,
  spacing,
  radius,
  fontSize,
  fontWeight,
} as const;

export type Theme = typeof theme;

export * from './colors';
export * from './spacing';
export * from './typography';
