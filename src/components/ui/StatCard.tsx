import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { spacing } from '@theme';

interface StatCardProps {
  label: string;
  value: string | number;
  accentColor?: string;
  icon?: ReactNode;
}

/** Compact icon + value + label card, for profile/summary stat rows. */
export function StatCard({ label, value, accentColor, icon }: StatCardProps) {
  return (
    <Card padding={spacing.sm} accentColor={accentColor}>
      <View style={styles.row}>
        {icon}
        <AppText variant="title" weight="extraBold" color={accentColor}>
          {value}
        </AppText>
      </View>
      <AppText variant="caption">{label}</AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
});
