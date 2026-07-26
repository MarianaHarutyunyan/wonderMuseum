import { useId } from 'react';
import Svg, { Defs, LinearGradient, Line, Polygon, Stop } from 'react-native-svg';

interface EgyptProps {
  size?: number;
}

/** Gradient pyramid glyph — the Ancient Egypt world badge. */
export function Egypt({ size = 28 }: EgyptProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFE9A6" />
          <Stop offset="1" stopColor="#E6862B" />
        </LinearGradient>
      </Defs>
      <Polygon points="14,4 4,23 24,23" fill={`url(#${gradientId})`} stroke="#B9660A" strokeWidth={0.75} strokeLinejoin="round" />
      <Line x1={10.5} y1={17} x2={17.5} y2={17} stroke="#B9660A" strokeOpacity={0.6} strokeWidth={0.9} />
      <Line x1={8.5} y1={20.5} x2={19.5} y2={20.5} stroke="#B9660A" strokeOpacity={0.6} strokeWidth={0.9} />
    </Svg>
  );
}
