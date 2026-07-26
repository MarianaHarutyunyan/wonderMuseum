import { useId } from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface ArtifactProps {
  size?: number;
}

/** Gradient urn glyph — the artifact collectible icon. */
export function Artifact({ size = 24 }: ArtifactProps) {
  const gradientId = useId();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#C9F0FF" />
          <Stop offset="1" stopColor="#4F8CFF" />
        </LinearGradient>
      </Defs>
      <Path
        d="M9 3h6v2.2c2.6 1 4 3.4 4 6.3 0 5-3 8.5-7 8.5s-7-3.5-7-8.5c0-2.9 1.4-5.3 4-6.3V3z"
        fill={`url(#${gradientId})`}
        stroke="#2E5FBF"
        strokeWidth={0.75}
        strokeLinejoin="round"
      />
      <Path d="M8 3h8" stroke="#2E5FBF" strokeWidth={1.4} strokeLinecap="round" />
    </Svg>
  );
}
