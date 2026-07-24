import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useThemeColors } from '@hooks/useThemeColors';
import { rewardColors } from '@theme';

const STAR_PATH =
  'M12 2.5l2.9 6.03 6.6.93-4.78 4.63 1.14 6.6L12 17.6l-5.86 3.09 1.14-6.6-4.78-4.63 6.6-.93z';

interface StarProps {
  size?: number;
  /** Unfilled stars render as an outline in the muted text color. */
  filled?: boolean;
  color?: string;
}

/** Star glyph used for ratings, rewards, and unlocked-level indicators. */
export function Star({ size = 24, filled = true, color }: StarProps) {
  const colors = useThemeColors();
  const fill = filled ? (color ?? rewardColors.star) : 'transparent';
  const stroke = filled ? (color ?? rewardColors.star) : colors.textMuted;

  return (
    <View style={styles.wrapper}>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path d={STAR_PATH} fill={fill} stroke={stroke} strokeWidth={1.5} strokeLinejoin="round" />
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
