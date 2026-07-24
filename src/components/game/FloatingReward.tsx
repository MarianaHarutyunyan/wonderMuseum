import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { AppText } from '@components/ui/AppText';
import type { RewardColorToken } from '@theme';
import { rewardColors } from '@theme';

interface FloatingRewardProps {
  /** Label shown as it floats up, e.g. "+10". */
  label: string;
  reward?: RewardColorToken;
  onComplete?: () => void;
}

/** A reward label that rises and fades out — for coin/star pickups and score pops. */
export function FloatingReward({ label, reward = 'star', onComplete }: FloatingRewardProps) {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSequence(withTiming(1, { duration: 150 }), withTiming(0, { duration: 400 }));
    translateY.value = withTiming(-60, { duration: 900 }, (finished) => {
      if (finished && onComplete) {
        runOnJS(onComplete)();
      }
    });
  }, [opacity, translateY, onComplete]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.wrapper, animatedStyle]} pointerEvents="none">
      <AppText size="lg" weight="extraBold" color={rewardColors[reward]}>
        {label}
      </AppText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
