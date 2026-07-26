import { useId } from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface DinoCompanionProps {
  size?: number;
}

/** Cute rounded vector dinosaur companion — home hero right-side placeholder. */
export function DinoCompanion({ size = 96 }: DinoCompanionProps) {
  const bodyId = useId();

  return (
    <Svg width={size} height={size * 0.95} viewBox="0 0 100 96">
      <Defs>
        <LinearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#8BEA72" />
          <Stop offset="1" stopColor="#4FBF52" />
        </LinearGradient>
      </Defs>

      <Path
        d="M18 78c-6 0-10-6-10-14 0-16 12-30 30-30 4-10 14-16 24-16 14 0 24 10 24 24 0 6-2 11-5 15 3 2 5 6 5 10 0 8-6 14-14 14H18z"
        fill={`url(#${bodyId})`}
      />
      <Path d="M40 22l6 10 8-6-2 12 10 2-9 6 6 9-11-3-3 11-5-10-9 5 2-11-10-3 8-6-4-10z" fill="#3FAE47" />

      <Circle cx="72" cy="30" r="5" fill="#1F2B57" />
      <Path d="M14 66l-10 6 4-10z" fill="#4FBF52" />
      <Path d="M30 78l-2 12 8-9z" fill="#3FAE47" />
      <Path d="M56 80l2 12-9-8z" fill="#3FAE47" />
    </Svg>
  );
}
