import { StyleSheet, View } from 'react-native';

import { Icon } from '@components/ui/Icon';
import { StatCard } from '@components/ui/StatCard';
import { spacing, type ColorToken, type EmojiToken, type GradientToken } from '@theme';

interface CollectibleBadgeProps {
  label: string;
  count: number;
  colorToken: string;
  icon: string;
}

const gradientByColorToken: Partial<Record<ColorToken, GradientToken>> = {
  accentGold: 'gold',
  accentFossil: 'orange',
  accentArtifact: 'blue',
  accentCreature: 'pink',
};

/** Colorful gradient stat card for a single collectible type (stars/fossils/artifacts/creatures). */
export function CollectibleBadge({ label, count, colorToken, icon }: CollectibleBadgeProps) {
  const gradient = gradientByColorToken[colorToken as ColorToken] ?? 'blue';

  return (
    <View style={styles.wrap}>
      <StatCard
        label={label}
        value={count}
        gradient={gradient}
        icon={
          <View style={styles.iconBadge}>
            <Icon token={icon as EmojiToken} size={22} color="#FFFFFF" />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    minWidth: 120,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
