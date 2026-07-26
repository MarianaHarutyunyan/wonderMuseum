import { useId } from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

interface ExplorerCharacterProps {
  size?: number;
}

/** Friendly vector explorer-kid placeholder — home hero left-side companion. */
export function ExplorerCharacter({ size = 96 }: ExplorerCharacterProps) {
  const skinId = useId();
  const outfitId = useId();

  return (
    <Svg width={size} height={size * 1.15} viewBox="0 0 96 110">
      <Defs>
        <LinearGradient id={skinId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFDCB0" />
          <Stop offset="1" stopColor="#F5B97D" />
        </LinearGradient>
        <LinearGradient id={outfitId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FF9B4A" />
          <Stop offset="1" stopColor="#FFA640" />
        </LinearGradient>
      </Defs>

      <Path d="M22 62c0-15 12-24 26-24s26 9 26 24-12 20-26 20-26-5-26-20z" fill={`url(#${outfitId})`} />
      <Rect x="30" y="76" width="14" height="24" rx="6" fill={`url(#${outfitId})`} />
      <Rect x="52" y="76" width="14" height="24" rx="6" fill={`url(#${outfitId})`} />

      <Circle cx="48" cy="34" r="22" fill={`url(#${skinId})`} />
      <Path d="M24 30c0-14 11-24 24-24s24 10 24 24c-8-6-16-8-24-8s-16 2-24 8z" fill="#63D76B" />
      <Rect x="20" y="20" width="56" height="8" rx="4" fill="#4FBF52" />

      <Circle cx="40" cy="36" r="3" fill="#2A2E45" />
      <Circle cx="56" cy="36" r="3" fill="#2A2E45" />
      <Path d="M40 46c3 3 13 3 16 0" stroke="#2A2E45" strokeWidth={2.5} strokeLinecap="round" fill="none" />
    </Svg>
  );
}
