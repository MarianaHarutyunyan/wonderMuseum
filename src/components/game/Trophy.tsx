import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

interface TrophyProps {
  size?: number;
}

/** Gradient trophy cup glyph — used for achievements/rank moments. */
export function Trophy({ size = 24 }: TrophyProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFF3C4" />
          <Stop offset="1" stopColor="#E6862B" />
        </LinearGradient>
      </Defs>
      <Path
        d="M7 3h10v6a5 5 0 0 1-10 0V3z"
        fill={`url(#${gradientId})`}
        stroke="#B9660A"
        strokeWidth={0.75}
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.5H4a3 3 0 0 0 3 5M17 4.5h3a3 3 0 0 1-3 5"
        stroke="#B9660A"
        strokeWidth={1.2}
        fill="none"
        strokeLinecap="round"
      />
      <Rect x={10.5} y={13.5} width={3} height={4} fill={`url(#${gradientId})`} />
      <Rect x={7.5} y={18} width={9} height={2.2} rx={1} fill={`url(#${gradientId})`} />
    </Svg>
  );
}
