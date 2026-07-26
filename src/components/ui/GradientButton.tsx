import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { gradientAngles, radius, shadows, spacing, type GradientColors } from '@theme';

interface GradientButtonProps extends PropsWithChildren {
  onPress: (event: GestureResponderEvent) => void;
  gradient: GradientColors;
  disabled?: boolean;
  radiusToken?: number;
  paddingVertical?: number;
  shadow?: object;
  accessibilityLabel?: string;
}

const GLOSS_OVERLAY: GradientColors = ['rgba(255,255,255,0.4)', 'rgba(255,255,255,0)'];

/** Bare gradient-filled pressable surface with a glossy top highlight — the building block behind `AppButton`. */
export function GradientButton({
  children,
  onPress,
  gradient,
  disabled = false,
  radiusToken = radius.button,
  paddingVertical = spacing.sm,
  shadow = shadows.md,
  accessibilityLabel,
}: GradientButtonProps) {
  return (
    <AnimatedButton onPress={onPress} disabled={disabled} accessibilityLabel={accessibilityLabel}>
      <LinearGradient
        colors={gradient}
        start={gradientAngles.diagonal.start}
        end={gradientAngles.diagonal.end}
        style={[styles.surface, { borderRadius: radiusToken, paddingVertical }, shadow]}
      >
        <LinearGradient
          colors={GLOSS_OVERLAY}
          start={gradientAngles.vertical.start}
          end={gradientAngles.vertical.end}
          style={[styles.gloss, { borderRadius: radiusToken }]}
          pointerEvents="none"
        />
        <View style={styles.content}>{children}</View>
      </LinearGradient>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  surface: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gloss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '55%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
});
