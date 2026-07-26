import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AppText } from '@components/ui/AppText';
import { gradientAngles, gradients, radius, shadows, spacing, type GradientToken } from '@theme';

interface StatCardProps {
  label: string;
  value: string | number;
  /** @deprecated kept for back-compat with older callers — prefer `gradient`. */
  accentColor?: string;
  gradient?: GradientToken;
  icon?: ReactNode;
}

/** Bright gradient mini-card — large icon, large value, small subtitle. Used for stat/summary rows. */
export function StatCard({ label, value, gradient = 'blue', icon }: StatCardProps) {
  return (
    <LinearGradient
      colors={gradients[gradient]}
      start={gradientAngles.diagonal.start}
      end={gradientAngles.diagonal.end}
      style={[styles.card, shadows.md, { borderRadius: radius.lg }]}
    >
      <View style={styles.iconWrap}>{icon}</View>
      <AppText variant="title" weight="extraBold" color="#FFFFFF">
        {value}
      </AppText>
      <AppText variant="caption" color="rgba(255,255,255,0.85)">
        {label}
      </AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.sm,
    gap: spacing.xxs,
    alignItems: 'flex-start',
  },
  iconWrap: {
    marginBottom: spacing.xxs,
  },
});
