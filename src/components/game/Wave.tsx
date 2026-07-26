import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface WaveProps {
  size?: number;
}

/** Gradient double-wave glyph — the Ocean world badge. */
export function Wave({ size = 28 }: WaveProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFD3EF" />
          <Stop offset="1" stopColor="#FF71C8" />
        </LinearGradient>
      </Defs>
      <Path
        d="M2 12c2.5-3 5-3 7.5 0s5 3 7.5 0 5-3 7.5 0"
        stroke="#4F8CFF"
        strokeWidth={2.4}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d="M2 18c2.5-3 5-3 7.5 0s5 3 7.5 0 5-3 7.5 0"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.4}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}
