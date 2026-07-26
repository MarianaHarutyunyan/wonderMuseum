import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface DinosaurProps {
  size?: number;
}

/** Gradient three-toed footprint glyph — the Dinosaur world badge. */
export function Dinosaur({ size = 28 }: DinosaurProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFE3B0" />
          <Stop offset="1" stopColor="#D9A86C" />
        </LinearGradient>
      </Defs>
      <Path d="M14 13c3 0 5 3.5 5 7.5S17.5 25 14 25s-5-1.5-5-4.5S11 13 14 13z" fill={`url(#${gradientId})`} />
      <Path d="M8 6c1.6 0 3 2.4 3 5.4S9.6 15 8 15s-3-1-3-4S6.4 6 8 6z" fill={`url(#${gradientId})`} />
      <Path d="M14 3c1.6 0 3 2.6 3 5.8S15.6 13 14 13s-3-1.2-3-4.2S12.4 3 14 3z" fill={`url(#${gradientId})`} />
      <Path d="M20 6c1.6 0 3 2.4 3 5.4S21.6 15 20 15s-3-1-3-4S18.4 6 20 6z" fill={`url(#${gradientId})`} />
    </Svg>
  );
}
