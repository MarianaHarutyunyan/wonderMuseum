import { useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import { Pressable, type GestureResponderEvent, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { ANIMATION_DURATION_MS, PRESS_SCALE } from '@animations';
import { useHaptics } from '@hooks/useHaptics';

interface AnimatedButtonProps extends PropsWithChildren {
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  haptic?: 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'none';
  pressScale?: number;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

/** Generic press-scale + haptic wrapper — the animation primitive every button/pressable card builds on. */
export function AnimatedButton({
  children,
  onPress,
  disabled = false,
  haptic = 'light',
  pressScale = PRESS_SCALE.default,
  style,
  accessibilityLabel,
}: AnimatedButtonProps) {
  const scale = useSharedValue(1);
  const { trigger } = useHaptics();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = useCallback(() => {
    scale.value = withTiming(pressScale, { duration: ANIMATION_DURATION_MS.pressFeedback });
  }, [scale, pressScale]);

  const handlePressOut = useCallback(() => {
    scale.value = withTiming(1, { duration: ANIMATION_DURATION_MS.pressFeedback });
  }, [scale]);

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (haptic !== 'none') {
        trigger(haptic);
      }
      onPress(event);
    },
    [trigger, haptic, onPress],
  );

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={style}
    >
      <Animated.View style={[animatedStyle, disabled && { opacity: 0.5 }]}>{children}</Animated.View>
    </Pressable>
  );
}
