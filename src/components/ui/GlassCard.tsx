import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { BlurView } from 'expo-blur';

import { useThemeColors } from '@hooks/useThemeColors';
import { radius, shadows, spacing } from '@theme';

interface GlassCardProps extends PropsWithChildren {
  padding?: number;
  intensity?: number;
}

/** Frosted-glass card — a blurred, translucent surface for overlays and floating chrome. */
export function GlassCard({ children, padding = spacing.md, intensity = 40 }: GlassCardProps) {
  const colors = useThemeColors();
  const scheme = useColorScheme();

  return (
    <BlurView
      intensity={intensity}
      tint={scheme === 'dark' ? 'dark' : 'light'}
      style={[styles.card, shadows.lg, { borderColor: colors.border, padding }]}
    >
      <View style={[styles.tint, { backgroundColor: colors.overlay }]} />
      {children}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.card,
    borderWidth: 1,
    overflow: 'hidden',
  },
  tint: {
    ...StyleSheet.absoluteFill,
    opacity: 0.15,
  },
});
