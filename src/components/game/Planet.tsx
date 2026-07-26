import { useId } from 'react';
import Svg, { Circle, Defs, Ellipse, LinearGradient, Stop } from 'react-native-svg';

interface PlanetProps {
  size?: number;
}

/** Gradient ringed-planet glyph — the Space world badge. */
export function Planet({ size = 28 }: PlanetProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#C9F0FF" />
          <Stop offset="1" stopColor="#4F8CFF" />
        </LinearGradient>
      </Defs>
      <Ellipse cx={14} cy={16} rx={12} ry={4} fill="none" stroke="#FFD54A" strokeWidth={1.6} />
      <Circle cx={14} cy={13} r={7.5} fill={`url(#${gradientId})`} stroke="#2E5FBF" strokeWidth={0.75} />
      <Circle cx={11.5} cy={10.5} r={1.6} fill="#FFFFFF" fillOpacity={0.5} />
    </Svg>
  );
}
