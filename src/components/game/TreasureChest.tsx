import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

interface TreasureChestProps {
  size?: number;
}

/** Small gold-gradient treasure chest — marks bonus/milestone levels in the level grid. */
export function TreasureChest({ size = 28 }: TreasureChestProps) {
  const bodyId = useId();
  const lidId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFE9A6" />
          <Stop offset="1" stopColor="#E6862B" />
        </LinearGradient>
        <LinearGradient id={lidId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFD54A" />
          <Stop offset="1" stopColor="#FFA640" />
        </LinearGradient>
      </Defs>
      <Rect x="4" y="13" width="20" height="11" rx="2.5" fill={`url(#${bodyId})`} />
      <Path d="M4 13c0-5 4.5-8 10-8s10 3 10 8H4z" fill={`url(#${lidId})`} />
      <Rect x="12" y="12" width="4" height="6" rx="1.5" fill="#8A4A12" />
    </Svg>
  );
}
