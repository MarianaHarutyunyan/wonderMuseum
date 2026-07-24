import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { ProgressBar } from '@components/ui/ProgressBar';
import { gradientAngles, radius, shadows, spacing, worldThemes, type WorldThemeToken } from '@theme';

interface WorldCardProps {
  world: WorldThemeToken;
  title: string;
  description: string;
  progress: number;
  onPress: () => void;
}

/** Full-bleed gradient world card — title, description, and completion progress. */
export function WorldCard({ world, title, description, progress, onPress }: WorldCardProps) {
  const theme = worldThemes[world];

  return (
    <AnimatedButton onPress={onPress} pressScale={0.97}>
      <LinearGradient
        colors={theme.gradient}
        start={gradientAngles.diagonal.start}
        end={gradientAngles.diagonal.end}
        style={[styles.card, shadows.lg, { borderRadius: radius.card }]}
      >
        <AppText variant="subtitle" weight="extraBold" color="#FFFFFF">
          {title}
        </AppText>
        <AppText variant="small" color="rgba(255,255,255,0.85)">
          {description}
        </AppText>
        <ProgressBar progress={progress} gradient="green" height={8} />
      </LinearGradient>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.md,
    gap: spacing.xs,
  },
});
