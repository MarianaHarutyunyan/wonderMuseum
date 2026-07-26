import { useId } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { useThemeColors } from '@hooks/useThemeColors';
import { rewardColors } from '@theme';

const STAR_PATH =
  'M12 2.5l2.9 6.03 6.6.93-4.78 4.63 1.14 6.6L12 17.6l-5.86 3.09 1.14-6.6-4.78-4.63 6.6-.93z';

interface StarProps {
  size?: number;
  /** Unfilled stars render as a muted outline. */
  filled?: boolean;
  color?: string;
}

/** Glossy gradient star glyph used for ratings, rewards, and unlocked-level indicators. */
export function Star({ size = 24, filled = true, color }: StarProps) {
  const colors = useThemeColors();
  const gradientId = useId();

  if (!filled) {
    return (
      <View style={styles.wrapper}>
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path d={STAR_PATH} fill="transparent" stroke={colors.textMuted} strokeWidth={1.5} strokeLinejoin="round" />
        </Svg>
      </View>
    );
  }

  if (color) {
    return (
      <View style={styles.wrapper}>
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path d={STAR_PATH} fill={color} strokeLinejoin="round" />
        </Svg>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <Defs>
          <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#FFF3C4" />
            <Stop offset="0.4" stopColor={rewardColors.star} />
            <Stop offset="1" stopColor="#E68A1F" />
          </LinearGradient>
        </Defs>
        <Path d={STAR_PATH} fill={`url(#${gradientId})`} stroke="#B9660A" strokeWidth={0.75} strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
