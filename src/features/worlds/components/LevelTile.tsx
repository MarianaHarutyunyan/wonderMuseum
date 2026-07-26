import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { Star } from '@components/game/Star';
import { useThemeColors } from '@hooks/useThemeColors';
import { gradientAngles, radius, shadows, spacing, type GradientColors } from '@theme';

interface LevelTileProps {
  levelNumber: number;
  stars: number;
  locked: boolean;
  accentColor: string;
  accentGradient?: GradientColors;
  onPress: () => void;
}

/** Numbered level tile for the Level Select grid — gradient fill, stars earned, or a lock when unreachable. */
export function LevelTile({ levelNumber, stars, locked, accentColor, accentGradient, onPress }: LevelTileProps) {
  const colors = useThemeColors();
  const fillGradient: GradientColors = accentGradient ?? [accentColor, accentColor];

  return (
    <AnimatedButton onPress={onPress} disabled={locked} pressScale={0.94} accessibilityLabel={`Level ${levelNumber}`}>
      {locked ? (
        <View style={[styles.tile, shadows.sm, { backgroundColor: colors.surfaceElevated, borderRadius: radius.md }]}>
          <Icon token="lock" size={26} color={colors.textMuted} />
        </View>
      ) : (
        <LinearGradient
          colors={fillGradient}
          start={gradientAngles.diagonal.start}
          end={gradientAngles.diagonal.end}
          style={[styles.tile, shadows.md, { borderRadius: radius.md }]}
        >
          <AppText size="lg" weight="extraBold" color={colors.white}>
            {levelNumber}
          </AppText>
          <View style={styles.stars}>
            {[0, 1, 2].map((index) => (
              <Star key={index} size={12} filled={index < stars} color={colors.white} />
            ))}
          </View>
        </LinearGradient>
      )}
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  tile: {
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xxs,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
});
