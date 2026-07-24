import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/theme';

interface CardProps extends PropsWithChildren {
  accentColor?: string;
}

export function Card({ children, accentColor = colors.border }: CardProps) {
  return <View style={[styles.card, { borderColor: accentColor }]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.md,
  },
});
