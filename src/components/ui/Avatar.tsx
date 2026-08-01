import { Image, StyleSheet, View, type ImageSourcePropType, type ImageStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { gradientAngles, gradients, radius, shadows } from '@theme';

interface AvatarProps {
  source?: ImageSourcePropType;
  /** Fallback initial shown when no `source` is provided. */
  label?: string;
  size?: number;
  ringColor?: string;
  /** Small gold chip overlapping the bottom-left edge — the player level badge. */
  levelBadge?: number;
  /** Overrides the inner image's size/position — used to crop/pan a larger source image (e.g. a face crop). */
  imageStyle?: ImageStyle;
}

const RING_PADDING = 3;

export function Avatar({ source, label, size = 56, ringColor, levelBadge, imageStyle }: AvatarProps) {
  const colors = useThemeColors();
  const innerSize = size - RING_PADDING * 2;
  const dimension = { width: innerSize, height: innerSize, borderRadius: radius.avatar };

  return (
    <View style={{ width: size, height: size }}>
      <LinearGradient
        colors={ringColor ? [ringColor, ringColor] : gradients.gold}
        start={gradientAngles.diagonal.start}
        end={gradientAngles.diagonal.end}
        style={[styles.ring, shadows.sm, { width: size, height: size, borderRadius: radius.avatar }]}
      >
        {source ? (
          <View style={[dimension, styles.clip]}>
            <Image source={source} style={[{ width: innerSize, height: innerSize }, styles.image, imageStyle]} />
          </View>
        ) : (
          <View style={[dimension, styles.fallback, { backgroundColor: colors.surfaceElevated }]}>
            <AppText size="lg" weight="extraBold" color={colors.primary}>
              {(label ?? '?').slice(0, 1).toUpperCase()}
            </AppText>
          </View>
        )}
      </LinearGradient>
      {levelBadge !== undefined ? (
        <View style={[styles.levelBadge, shadows.sm, { borderColor: colors.background }]}>
          <AppText size="xs" weight="extraBold" color={colors.onGold}>
            {levelBadge}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: RING_PADDING,
  },
  clip: {
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelBadge: {
    position: 'absolute',
    bottom: -6,
    left: -6,
    minWidth: 17,
    height: 17,
    paddingHorizontal: 3,
    borderRadius: 9,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD54A',
  },
});
