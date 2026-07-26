import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface CreatureProps {
  size?: number;
}

/** Gradient scallop-shell glyph — the creature collectible icon. */
export function Creature({ size = 24 }: CreatureProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFD3EF" />
          <Stop offset="1" stopColor="#FF71C8" />
        </LinearGradient>
      </Defs>
      <Path
        d="M12 3c4 3 8 6.5 8 11a8 8 0 0 1-16 0c0-4.5 4-8 8-11z"
        fill={`url(#${gradientId})`}
        stroke="#C43D93"
        strokeWidth={0.75}
      />
      <Path
        d="M12 6v14M9 8.5v10M15 8.5v10M6.5 12v6M17.5 12v6"
        stroke="#C43D93"
        strokeOpacity={0.55}
        strokeWidth={0.9}
        fill="none"
      />
    </Svg>
  );
}
