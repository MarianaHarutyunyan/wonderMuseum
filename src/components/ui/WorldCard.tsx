import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { ProgressBar } from '@components/ui/ProgressBar';
import { Star } from '@components/game/Star';
import { gradientAngles, radius, shadows, spacing, worldThemes, type EmojiToken, type WorldThemeToken } from '@theme';

interface WorldCardProps {
  world: WorldThemeToken;
  title: string;
  description: string;
  progress: number;
  icon: EmojiToken;
  completedLevels?: number;
  totalLevels?: number;
  onPress: () => void;
}

/** Premium gradient world card — illustration, title, description, progress, and stars earned. */
export function WorldCard({ world, title, description, progress, icon, completedLevels, totalLevels, onPress }: WorldCardProps) {
  const theme = worldThemes[world];

  return (
    <AnimatedButton onPress={onPress} pressScale={0.97}>
      <LinearGradient
        colors={theme.gradient}
        start={gradientAngles.diagonal.start}
        end={gradientAngles.diagonal.end}
        style={[styles.card, shadows.lg, { borderRadius: radius.card }]}
      >
        <View style={styles.topRow}>
          <View style={styles.illustration}>
            <Icon token={icon} size={56} />
          </View>
          {totalLevels ? (
            <View style={styles.badge}>
              <Star size={14} color="#FFD54A" />
              <AppText size="xs" weight="extraBold" color="#FFFFFF">
                {completedLevels ?? 0}/{totalLevels}
              </AppText>
            </View>
          ) : null}
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.textCol}>
            <AppText variant="subtitle" weight="extraBold" color="#FFFFFF">
              {title}
            </AppText>
            <AppText variant="small" color="rgba(255,255,255,0.85)">
              {description}
            </AppText>
            <ProgressBar progress={progress} gradient="gold" height={8} />
          </View>
          <View style={styles.forwardButton}>
            <Icon token="forward" size={18} color="#FFFFFF" />
          </View>
        </View>
      </LinearGradient>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.md,
    gap: spacing.xs,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  illustration: {
    width: 72,
    height: 72,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(24,36,77,0.35)',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  textCol: {
    flex: 1,
    gap: spacing.xs,
  },
  forwardButton: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
