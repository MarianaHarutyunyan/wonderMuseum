import { StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, spacing } from '@theme';

interface BadgeProps {
  label: string;
  color?: string;
  /** Filled uses `color` as background with white text; outline uses it as border/text. */
  tone?: 'filled' | 'outline';
}

export function Badge({ label, color, tone = 'filled' }: BadgeProps) {
  const colors = useThemeColors();
  const accent = color ?? colors.primary;
  const isFilled = tone === 'filled';

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: isFilled ? accent : colors.transparent,
          borderColor: accent,
          borderWidth: isFilled ? 0 : 1.5,
        },
      ]}
    >
      <AppText size="xs" weight="bold" color={isFilled ? colors.white : accent}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: radius.pill,
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.sm,
    alignSelf: 'flex-start',
  },
});
