import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius } from '@theme';

interface ToggleSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  accessibilityLabel: string;
}

const TRACK_WIDTH = 52;
const TRACK_HEIGHT = 30;
const THUMB_SIZE = 24;

/** Rounded pill switch — Settings/Parent Mode toggles. */
export function ToggleSwitch({ value, onChange, accessibilityLabel }: ToggleSwitchProps) {
  const colors = useThemeColors();
  const progress = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(value ? 1 : 0, { duration: 180 });
  }, [value, progress]);

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value * (TRACK_WIDTH - THUMB_SIZE - 6) }],
  }));

  return (
    <AnimatedButton
      onPress={() => onChange(!value)}
      pressScale={0.95}
      haptic="light"
      accessibilityLabel={accessibilityLabel}
    >
      <Animated.View
        style={[
          styles.track,
          { backgroundColor: value ? colors.success : colors.border, borderRadius: radius.pill },
        ]}
      >
        <Animated.View
          style={[styles.thumb, { backgroundColor: colors.white, borderRadius: radius.avatar }, thumbStyle]}
        />
      </Animated.View>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    padding: 3,
    justifyContent: 'center',
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
  },
});
