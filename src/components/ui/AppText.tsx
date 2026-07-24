import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';

import { colors, fontSize, fontWeight, type FontSizeToken, type FontWeightToken } from '@/theme';

interface AppTextProps extends PropsWithChildren {
  size?: FontSizeToken;
  weight?: FontWeightToken;
  color?: string;
  align?: TextStyle['textAlign'];
  numberOfLines?: number;
}

export function AppText({
  children,
  size = 'md',
  weight = 'regular',
  color = colors.textPrimary,
  align = 'left',
  numberOfLines,
}: AppTextProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.base,
        { fontSize: fontSize[size], fontWeight: fontWeight[weight], color, textAlign: align },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {},
});
