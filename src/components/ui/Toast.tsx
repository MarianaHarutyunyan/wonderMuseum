import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';

import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, shadows, spacing } from '@theme';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  visible: boolean;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onDismiss: () => void;
}

/** Transient top-of-screen notification banner. Renders nothing when `visible` is false. */
export function Toast({ visible, message, variant = 'info', duration = 2500, onDismiss }: ToastProps) {
  const colors = useThemeColors();

  useEffect(() => {
    if (!visible) {
      return;
    }
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onDismiss]);

  if (!visible) {
    return null;
  }

  const accent = { success: colors.success, error: colors.error, warning: colors.warning, info: colors.primary }[variant];

  return (
    <Animated.View
      entering={FadeInDown.duration(220)}
      exiting={FadeOutUp.duration(180)}
      style={[
        styles.toast,
        shadows.lg,
        { backgroundColor: colors.surface, borderRadius: radius.input, borderLeftColor: accent },
      ]}
    >
      <AppText size="sm" weight="bold" color={accent}>
        {message}
      </AppText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: spacing.xl,
    left: spacing.md,
    right: spacing.md,
    padding: spacing.sm,
    borderLeftWidth: 4,
  },
});
