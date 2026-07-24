/**
 * Border radius scale. The named tokens (`button`, `card`, `input`, `avatar`,
 * `bottomSheet`) match the Wonder Museum spec; the numeric scale
 * (`xs`…`pill`) is for one-off shapes that don't map to a named component.
 */
export const radius = {
  xs: 8,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
  pill: 999,

  button: 20,
  card: 28,
  input: 18,
  avatar: 999,
  bottomSheet: 36,
} as const;

export type RadiusToken = keyof typeof radius;
