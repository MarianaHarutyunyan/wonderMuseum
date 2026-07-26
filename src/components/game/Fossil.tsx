import { useId } from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface FossilProps {
  size?: number;
}

/** Gradient bone glyph — the fossil collectible icon. */
export function Fossil({ size = 24 }: FossilProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#F3E1C4" />
          <Stop offset="1" stopColor="#D9A86C" />
        </LinearGradient>
      </Defs>
      <Path d="M6.5 8.5h11v7h-11z" fill={`url(#${gradientId})`} stroke="#A9713A" strokeWidth={0.75} />
      <Circle cx={5} cy={7} r={2.4} fill={`url(#${gradientId})`} stroke="#A9713A" strokeWidth={0.75} />
      <Circle cx={5} cy={10.5} r={2.4} fill={`url(#${gradientId})`} stroke="#A9713A" strokeWidth={0.75} />
      <Circle cx={19} cy={9.5} r={2.4} fill={`url(#${gradientId})`} stroke="#A9713A" strokeWidth={0.75} />
      <Circle cx={19} cy={13} r={2.4} fill={`url(#${gradientId})`} stroke="#A9713A" strokeWidth={0.75} />
    </Svg>
  );
}
