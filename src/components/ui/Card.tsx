import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

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

export function Card({ children, variant = 'default', accentColor, padding = spacing.md, onPress }: CardProps) {
  const colors = useThemeColors();
  const preset = cardVariants[variant];
  const background = variant === 'dark' ? colors.cardDark : colors.surface;
  const borderColor = accentColor ?? (variant === 'outlined' ? colors.border : colors.transparent);

  const content = (
    <View
      style={[
        styles.card,
        preset.shadow,
        {
          backgroundColor: background,
          borderRadius: preset.radius,
          borderColor,
          borderWidth: borderColor === colors.transparent ? 0 : 1,
          padding,
        },
      ]}
    >
      {children}
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
  card: {},
});
