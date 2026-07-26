import { useId } from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

interface MuseumHeroProps {
  width?: number;
  height?: number;
}

/** Vector museum-on-a-hill illustration — building, steps, hills, and trees for the home hero background. */
export function MuseumHero({ width = 260, height = 170 }: MuseumHeroProps) {
  const stoneId = useId();
  const roofId = useId();
  const hillId = useId();

  return (
    <Svg width={width} height={height} viewBox="0 0 260 170">
      <Defs>
        <LinearGradient id={hillId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#8BEA72" />
          <Stop offset="1" stopColor="#4FBF52" />
        </LinearGradient>
        <LinearGradient id={stoneId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" />
          <Stop offset="1" stopColor="#E7EEFC" />
        </LinearGradient>
        <LinearGradient id={roofId} x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#FFD54A" />
          <Stop offset="1" stopColor="#FFA640" />
        </LinearGradient>
      </Defs>

      <Path d="M0 150c40-20 90-20 130-4s90 16 130-2v26H0z" fill={`url(#${hillId})`} />

      <Circle cx="42" cy="120" r="16" fill="#3FAE47" />
      <Rect x="39" y="128" width="6" height="16" fill="#7A5A3A" />
      <Circle cx="222" cy="128" r="14" fill="#3FAE47" />
      <Rect x="219" y="135" width="6" height="14" fill="#7A5A3A" />

      <Path d="M60 90l70-38 70 38v6H60z" fill={`url(#${roofId})`} />
      <Rect x="66" y="94" width="128" height="52" fill={`url(#${stoneId})`} />

      <Rect x="80" y="106" width="14" height="40" rx="3" fill="#C9D8F5" />
      <Rect x="104" y="106" width="14" height="40" rx="3" fill="#C9D8F5" />
      <Rect x="128" y="106" width="14" height="40" rx="3" fill="#C9D8F5" />
      <Rect x="152" y="106" width="14" height="40" rx="3" fill="#C9D8F5" />
      <Rect x="176" y="106" width="14" height="40" rx="3" fill="#C9D8F5" />

      <Rect x="56" y="146" width="148" height="10" rx="3" fill="#DCE6FA" />
      <Rect x="48" y="156" width="164" height="10" rx="3" fill="#DCE6FA" />
    </Svg>
  );
}
