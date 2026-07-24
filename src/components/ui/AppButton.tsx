import { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

import { AppText } from '@/components/ui/AppText';
import { useHaptics } from '@/hooks/useHaptics';
import { colors, radius, spacing } from '@/theme';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const PRESS_SCALE = 0.96;
const ANIMATION_DURATION_MS = 100;

interface AppButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function AppButton({ label, onPress, variant = 'primary', disabled = false }: AppButtonProps) {
  const scale = useSharedValue(1);
  const { trigger } = useHaptics();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = useCallback(() => {
    scale.value = withTiming(PRESS_SCALE, { duration: ANIMATION_DURATION_MS });
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withTiming(1, { duration: ANIMATION_DURATION_MS });
  }, [scale]);

  const handlePress = useCallback(() => {
    trigger('light');
    onPress();
  }, [trigger, onPress]);

  const gradientColors: [string, string] =
    variant === 'primary' ? [colors.primary, colors.primaryLight] : [colors.surfaceElevated, colors.surface];

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <AnimatedLinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, animatedStyle, disabled && styles.disabled]}
      >
        <AppText size="md" weight="bold">
          {label}
        </AppText>
      </AnimatedLinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
