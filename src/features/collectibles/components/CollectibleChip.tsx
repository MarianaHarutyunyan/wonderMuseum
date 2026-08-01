import { StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { radius, shadows, spacing, type EmojiToken } from '@theme';

interface CollectibleChipProps {
  label: string;
  count: number;
  colorToken: string;
  icon: string;
}

/** Compact glass card — icon + count on one line, label below — used in the Home hero's collectible summary row. */
export function CollectibleChip({ label, count, icon }: CollectibleChipProps) {
  return (
    <View style={[styles.chip, shadows.sm]}>
      <View style={styles.topRow}>
        <Icon token={icon as EmojiToken} size={24} />
        <AppText size="lg" weight="extraBold" color="#FFFFFF" shadow>
          {count}
        </AppText>
      </View>
      <AppText size="xs" weight="bold" color="rgba(255,255,255,0.85)" numberOfLines={1}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    alignItems: 'flex-start',
    gap: spacing.xxs,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(58, 22, 92, 0.55)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
  },
});
