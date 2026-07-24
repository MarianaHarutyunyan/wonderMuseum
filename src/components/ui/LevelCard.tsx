import { StyleSheet, View } from 'react-native';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { ProgressBar } from '@components/ui/ProgressBar';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, shadows, spacing, type GradientToken } from '@theme';

interface LevelCardProps {
  level: number;
  title: string;
  progress: number;
  locked?: boolean;
  gradient?: GradientToken;
  onPress: () => void;
}

/** Card for a numbered level — badge, title, progress bar, and a locked overlay. */
export function LevelCard({ level, title, progress, locked = false, gradient = 'blue', onPress }: LevelCardProps) {
  const colors = useThemeColors();

  return (
    <AnimatedButton onPress={onPress} disabled={locked} pressScale={0.97}>
      <View style={[styles.card, shadows.md, { backgroundColor: colors.surface, borderRadius: radius.card }]}>
        <View style={[styles.badge, { backgroundColor: locked ? colors.textMuted : colors.primary }]}>
          <AppText size="lg" weight="extraBold" color={colors.white}>
            {level}
          </AppText>
        </View>
        <View style={styles.body}>
          <AppText variant="small" weight="bold" color={locked ? colors.textMuted : colors.textPrimary}>
            {title}
          </AppText>
          <ProgressBar progress={locked ? 0 : progress} gradient={gradient} height={8} />
        </View>
        {locked ? <AppText size="xs">🔒</AppText> : null}
      </View>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.sm,
    gap: spacing.sm,
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    gap: spacing.xxs,
  },
});
