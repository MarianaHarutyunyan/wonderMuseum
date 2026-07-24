import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useThemeColors } from '@hooks/useThemeColors';
import { gradientAngles, gradients, type GradientColors, type GradientToken } from '@theme';

interface ProgressBarProps {
  /** 0–1 completion. */
  progress: number;
  gradient?: GradientToken;
  height?: number;
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export function ProgressBar({ progress, gradient = 'blue', height = 12 }: ProgressBarProps) {
  const colors = useThemeColors();
  const clamped = Math.min(1, Math.max(0, progress));
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withTiming(clamped, { duration: 400 });
  }, [clamped, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%`,
  }));

  const fillColors: GradientColors = gradients[gradient];

  return (
    <View style={[styles.track, { height, borderRadius: height / 2, backgroundColor: colors.border }]}>
      <AnimatedLinearGradient
        colors={fillColors}
        start={gradientAngles.horizontal.start}
        end={gradientAngles.horizontal.end}
        style={[styles.fill, { borderRadius: height / 2 }, animatedStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
