import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Polygon, Stop } from 'react-native-svg';

interface GemProps {
  size?: number;
}

/** Faceted gradient gem glyph — premium currency icon. */
export function Gem({ size = 28 }: GemProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#D9C4FF" />
          <Stop offset="0.5" stopColor="#8A6DFF" />
          <Stop offset="1" stopColor="#5B3FD9" />
        </LinearGradient>
      </Defs>
      <Polygon points="14,3 22,10 14,25 6,10" fill={`url(#${gradientId})`} stroke="#4A2FBF" strokeWidth={0.75} strokeLinejoin="round" />
      <Path d="M6 10h16M10 10l4-7 4 7M11 10l3 15M17 10l-3 15" stroke="#FFFFFF" strokeOpacity={0.35} strokeWidth={0.75} fill="none" />
    </Svg>
  );
}
