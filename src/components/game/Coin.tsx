import { useId } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Path, Stop, Text as SvgText } from 'react-native-svg';

import { AppText } from '@components/ui/AppText';

interface CoinProps {
  size?: number;
  count?: number;
}

/** Glossy gold coin glyph, optionally paired with a count label. */
export function Coin({ size = 32, count }: CoinProps) {
  const gradientId = useId();
  const shineId = useId();

  return (
    <View style={styles.row}>
      <Svg width={size} height={size} viewBox="0 0 32 32">
        <Defs>
          <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFE9A6" />
            <Stop offset="0.5" stopColor="#FFC93C" />
            <Stop offset="1" stopColor="#E6862B" />
          </LinearGradient>
          <LinearGradient id={shineId} x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.8} />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Circle cx={16} cy={16} r={14.5} fill={`url(#${gradientId})`} stroke="#B9660A" strokeWidth={1} />
        <Circle cx={16} cy={16} r={11} fill="none" stroke="#FFF3C4" strokeOpacity={0.6} strokeWidth={1} />
        <Path d="M8 8a13 13 0 0 1 10-3.5 13 13 0 0 0-14 9.5A13 13 0 0 1 8 8z" fill={`url(#${shineId})`} />
        <SvgText x={16} y={21} fontSize={15} fontWeight="800" fill="#7A4A12" textAnchor="middle">
          $
        </SvgText>
      </Svg>
      {count !== undefined ? (
        <AppText size="sm" weight="bold">
          {count}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});
