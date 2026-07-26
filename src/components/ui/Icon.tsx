import { StyleSheet, View } from 'react-native';

import { Artifact, Coin, Creature, Dinosaur, Egypt, Energy, Fossil, Gem, Planet, Star, Trophy, Wave } from '@components/game';
import { GlyphIcon, type GlyphToken } from '@components/icons/GlyphIcon';
import { useThemeColors } from '@hooks/useThemeColors';
import type { EmojiToken } from '@theme';

interface IconProps {
  token: EmojiToken;
  size?: number;
  /** Only applies to outline glyphs — hero/reward glyphs keep their fixed gradient look. */
  color?: string;
}

/** Renders a semantic glyph — a gradient "hero" component for reward/world icons, an outline SVG for everything else. */
export function Icon({ token, size = 20, color }: IconProps) {
  const colors = useThemeColors();
  const resolvedColor = color ?? colors.textPrimary;

  switch (token) {
    case 'star':
      return <Star size={size} />;
    case 'coin':
      return <Coin size={size} />;
    case 'gem':
      return <Gem size={size} />;
    case 'energy':
      return <Energy size={size} />;
    case 'fossil':
      return <Fossil size={size} />;
    case 'artifact':
      return <Artifact size={size} />;
    case 'creature':
      return <Creature size={size} />;
    case 'trophy':
      return <Trophy size={size} />;
    case 'dinosaur':
      return <Dinosaur size={size} />;
    case 'planet':
      return <Planet size={size} />;
    case 'wave':
      return <Wave size={size} />;
    case 'egypt':
      return <Egypt size={size} />;
    default:
      return (
        <View style={styles.wrapper}>
          <GlyphIcon token={token as GlyphToken} size={size} color={resolvedColor} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
