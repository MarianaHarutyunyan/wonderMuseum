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

/** Soft, colored glow shadows — never plain black drop shadows. */
export const shadows = {
  none: {},
  sm: buildShadow('#6D8BFF', 0.16, 8, 3, 3),
  md: buildShadow('#6D8BFF', 0.2, 14, 6, 6),
  lg: buildShadow('#6D8BFF', 0.24, 24, 10, 10),
  xl: buildShadow('#6D8BFF', 0.28, 34, 16, 14),
} as const;

export type ShadowToken = keyof typeof shadows;

/** Colored glow shadow for celebratory/pressed states (e.g. reward buttons). */
export function glowShadow(color: string) {
  return buildShadow(color, 0.4, 24, 8, 10);
}
