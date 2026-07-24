import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Card } from '@/components/ui/Card';
import { colors, spacing } from '@/theme';
import type { ExhibitConfig } from '@/types/world.types';

interface ExhibitCardProps {
  exhibit: ExhibitConfig;
  isUnlocked: boolean;
}

export function ExhibitCard({ exhibit, isUnlocked }: ExhibitCardProps) {
  return (
    <Card accentColor={isUnlocked ? colors.success : colors.border}>
      <View style={styles.row}>
        <AppText size="md" weight="bold" color={isUnlocked ? colors.textPrimary : colors.textMuted}>
          {exhibit.title}
        </AppText>
        <AppText size="xs" color={isUnlocked ? colors.success : colors.textMuted} weight="semiBold">
          {isUnlocked ? 'Unlocked' : 'Locked'}
        </AppText>
      </View>
      {isUnlocked ? (
        <AppText size="sm" color={colors.textSecondary}>
          {exhibit.description}
        </AppText>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xxs,
  },
});
