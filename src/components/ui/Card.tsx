import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { useThemeColors } from '@hooks/useThemeColors';
import { cardVariants, spacing, type CardVariantToken } from '@theme';

interface CardProps extends PropsWithChildren {
  variant?: CardVariantToken;
  /** Overrides the variant's border color (e.g. a world/reward accent). */
  accentColor?: string;
  padding?: number;
  onPress?: () => void;
}

/** Glass card — translucent `#22295C` panel with a soft blur, per the Wonder Museum spec. */
export function Card({ children, variant = 'default', accentColor, padding = spacing.md, onPress }: CardProps) {
  const colors = useThemeColors();
  const preset = cardVariants[variant];
  const borderColor = accentColor ?? (variant === 'outlined' ? colors.border : colors.transparent);

  const content = (
    <View
      style={[
        styles.card,
        preset.shadow,
        {
          borderRadius: preset.radius,
          borderColor,
          borderWidth: borderColor === colors.transparent ? 0 : 1,
        },
      ]}
    >
      <BlurView intensity={30} tint="dark" style={StyleSheet.absoluteFill} />
      <View style={[styles.glassTint, { borderRadius: preset.radius }]} />
      <View style={{ padding }}>{children}</View>
    </View>
  );

  if (!onPress) {
    return content;
  }

  return (
    <AnimatedButton onPress={onPress} pressScale={0.98}>
      {content}
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  glassTint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(34, 41, 92, 0.28)',
  },
});
