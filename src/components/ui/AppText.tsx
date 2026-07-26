import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';

import { useThemeColors } from '@hooks/useThemeColors';
import {
  fontSize,
  fontWeight,
  textVariants,
  type FontSizeToken,
  type FontWeightToken,
  type TextVariantToken,
} from '@theme';

interface AppTextProps extends PropsWithChildren {
  /** Named preset from the type scale (titleXl/title/subtitle/body/small/caption). */
  variant?: TextVariantToken;
  /** Overrides the variant's font size, or sets it directly when no variant is given. */
  size?: FontSizeToken;
  /** Overrides the variant's font weight, or sets it directly when no variant is given. */
  weight?: FontWeightToken;
  color?: string;
  align?: TextStyle['textAlign'];
  numberOfLines?: number;
  /** Soft drop shadow for legibility over busy backgrounds (e.g. the home hero image). */
  shadow?: boolean;
}

export function AppText({
  children,
  variant,
  size,
  weight,
  color,
  align = 'left',
  numberOfLines,
  shadow = false,
}: AppTextProps) {
  const colors = useThemeColors();
  const preset = variant ? textVariants[variant] : undefined;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.base,
        {
          fontSize: size ? fontSize[size] : (preset?.fontSize ?? fontSize.md),
          fontFamily: preset?.fontFamily,
          fontWeight: weight ? fontWeight[weight] : (preset?.fontWeight ?? fontWeight.regular),
          lineHeight: preset?.lineHeight,
          color: color ?? colors.textPrimary,
          textAlign: align,
          ...(shadow ? styles.shadow : null),
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {},
  shadow: {
    textShadowColor: 'rgba(20, 20, 45, 0.45)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
