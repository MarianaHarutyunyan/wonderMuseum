/**
 * Border radius scale. The named tokens (`button`, `card`, `input`, `avatar`,
 * `bottomSheet`) match the Wonder Museum spec; the numeric scale
 * (`xs`…`pill`) is for one-off shapes that don't map to a named component.
 */
export const radius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  pill: 999,

  button: 16,
  card: 24,
  input: 16,
  avatar: 999,
  bottomSheet: 24,
} as const;

export type RadiusToken = keyof typeof radius;
