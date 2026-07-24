import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { gradientAngles, museumThemes, radius, shadows, spacing, type MuseumThemeToken } from '@theme';

interface MuseumCardProps {
  section: MuseumThemeToken;
  title: string;
  subtitle?: string;
  onPress: () => void;
}

/** Card for a broad museum section (history/nature/space/art) with a gradient header band. */
export function MuseumCard({ section, title, subtitle, onPress }: MuseumCardProps) {
  const colors = useThemeColors();
  const theme = museumThemes[section];

  return (
    <AnimatedButton onPress={onPress} pressScale={0.97}>
      <View style={[styles.card, shadows.md, { backgroundColor: colors.surface, borderRadius: radius.card }]}>
        <LinearGradient
          colors={theme.gradient}
          start={gradientAngles.horizontal.start}
          end={gradientAngles.horizontal.end}
          style={styles.header}
        />
        <View style={styles.body}>
          <AppText variant="subtitle" weight="bold">
            {title}
          </AppText>
          {subtitle ? <AppText variant="caption">{subtitle}</AppText> : null}
        </View>
      </View>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  header: {
    height: 64,
  },
  body: {
    padding: spacing.md,
    gap: spacing.xxs,
  },
});
