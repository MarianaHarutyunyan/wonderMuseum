import { useId } from 'react';
import Svg, { Defs, LinearGradient, Polygon, Stop } from 'react-native-svg';

interface EnergyProps {
  size?: number;
}

/** Gradient lightning-bolt glyph — the energy/lives currency icon. */
export function Energy({ size = 24 }: EnergyProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFF3B0" />
          <Stop offset="0.5" stopColor="#FFD54A" />
          <Stop offset="1" stopColor="#FF9B4A" />
        </LinearGradient>
      </Defs>
      <Polygon points="13,2 4,14 11,14 9,22 20,9 13,9" fill={`url(#${gradientId})`} stroke="#C96A17" strokeWidth={0.75} strokeLinejoin="round" />
    </Svg>
  );
}
