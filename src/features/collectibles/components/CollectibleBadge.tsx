import { StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { colors, radius, spacing, type ColorToken } from '@theme';

interface CollectibleBadgeProps {
  label: string;
  count: number;
  colorToken: string;
}

export function CollectibleBadge({ label, count, colorToken }: CollectibleBadgeProps) {
  const accentColor = colors[colorToken as ColorToken] ?? colors.primary;

  return (
    <View style={[styles.badge, { borderColor: accentColor }]}>
      <AppText size="xs" color={accentColor} weight="semiBold">
        {label}
      </AppText>
      <AppText size="md" weight="bold">
        {count}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    minWidth: 64,
  },
});
