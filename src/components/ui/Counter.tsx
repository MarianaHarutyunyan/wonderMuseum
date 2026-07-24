import { useEffect, useState } from 'react';
import Animated, { useAnimatedReaction, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';

import { fontSize, fontWeight, type FontSizeToken } from '@theme';
import { useThemeColors } from '@hooks/useThemeColors';

interface CounterProps {
  value: number;
  size?: FontSizeToken;
  color?: string;
  duration?: number;
}

/** Animates a numeric value counting up/down to `value` (score, coins, stars). */
export function Counter({ value, size = 'xl', color, duration = 500 }: CounterProps) {
  const colors = useThemeColors();
  const animated = useSharedValue(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    animated.value = withTiming(value, { duration });
  }, [value, duration, animated]);

  useAnimatedReaction(
    () => Math.round(animated.value),
    (rounded, previous) => {
      if (rounded !== previous) {
        runOnJS(setDisplay)(rounded);
      }
    },
  );

  return (
    <Animated.Text style={{ fontSize: fontSize[size], fontWeight: fontWeight.extraBold, color: color ?? colors.textPrimary }}>
      {display}
    </Animated.Text>
  );
}
