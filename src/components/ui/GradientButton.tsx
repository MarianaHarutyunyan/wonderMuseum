import type { PropsWithChildren } from 'react';
import { StyleSheet, type GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { gradientAngles, radius, shadows, spacing, type GradientColors } from '@theme';

interface GradientButtonProps extends PropsWithChildren {
  onPress: (event: GestureResponderEvent) => void;
  gradient: GradientColors;
  disabled?: boolean;
  radiusToken?: number;
  shadow?: object;
  accessibilityLabel?: string;
}

/** Bare gradient-filled pressable surface — the building block behind `AppButton`. */
export function GradientButton({
  children,
  onPress,
  gradient,
  disabled = false,
  radiusToken = radius.button,
  shadow = shadows.md,
  accessibilityLabel,
}: GradientButtonProps) {
  return (
    <AnimatedButton onPress={onPress} disabled={disabled} accessibilityLabel={accessibilityLabel}>
      <LinearGradient
        colors={gradient}
        start={gradientAngles.diagonal.start}
        end={gradientAngles.diagonal.end}
        style={[styles.surface, { borderRadius: radiusToken }, shadow]}
      >
        {children}
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
    flexDirection: 'row',
    gap: spacing.xs,
  },
});
