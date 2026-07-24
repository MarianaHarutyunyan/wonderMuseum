import { Platform } from 'react-native';

function buildShadow(color: string, opacity: number, radiusPx: number, offsetY: number, elevation: number) {
  return Platform.select({
    android: { elevation },
    default: {
      shadowColor: color,
      shadowOffset: { width: 0, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: radiusPx,
    },
  });
}

/** Soft, low-contrast shadows — never harsh Material-style drop shadows. */
export const shadows = {
  none: {},
  sm: buildShadow('#23365D', 0.08, 4, 2, 2),
  md: buildShadow('#23365D', 0.12, 8, 4, 4),
  lg: buildShadow('#23365D', 0.16, 16, 8, 8),
  xl: buildShadow('#23365D', 0.2, 24, 12, 12),
} as const;

export type ShadowToken = keyof typeof shadows;

/** Colored glow shadow for celebratory/pressed states (e.g. reward buttons). */
export function glowShadow(color: string) {
  return buildShadow(color, 0.35, 20, 6, 8);
}
