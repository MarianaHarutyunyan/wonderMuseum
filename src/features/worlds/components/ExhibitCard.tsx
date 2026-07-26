import { StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, shadows, spacing, type EmojiToken } from '@theme';
import type { ExhibitConfig } from '@/types/world.types';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

const RARITY_COLORS: Record<Rarity, string> = {
  legendary: '#FFD54A',
  epic: '#886CFF',
  rare: '#4D91F7',
  common: '#63D76B',
};

const RARITY_LABELS: Record<Rarity, string> = {
  legendary: 'Legendary',
  epic: 'Epic',
  rare: 'Rare',
  common: 'Common',
};

const iconByCollectibleType: Record<ExhibitConfig['collectibleType'], EmojiToken> = {
  star: 'star',
  fossil: 'fossil',
  artifact: 'artifact',
  creature: 'creature',
};

interface ExhibitCardProps {
  exhibit: ExhibitConfig;
  isUnlocked: boolean;
  rarity?: Rarity;
}

/** Collectible-style exhibit card — rarity-colored border/glow, locked overlay, small illustration. */
export function ExhibitCard({ exhibit, isUnlocked, rarity = 'common' }: ExhibitCardProps) {
  const colors = useThemeColors();
  const rarityColor = RARITY_COLORS[rarity];

  return (
    <View
      style={[
        styles.card,
        shadows.md,
        {
          backgroundColor: colors.surface,
          borderRadius: radius.lg,
          borderColor: rarityColor,
        },
      ]}
    >
      <View style={[styles.thumb, { backgroundColor: `${rarityColor}22` }]}>
        <Icon token={iconByCollectibleType[exhibit.collectibleType]} size={32} />
        {!isUnlocked ? (
          <View style={[styles.lockOverlay, { backgroundColor: colors.overlay }]}>
            <Icon token="lock" size={18} color={colors.white} />
          </View>
        ) : null}
      </View>

      <View style={styles.info}>
        <View style={styles.row}>
          <AppText size="md" weight="bold" color={isUnlocked ? colors.textPrimary : colors.textMuted} numberOfLines={1}>
            {exhibit.title}
          </AppText>
          <View style={[styles.rarityBadge, { backgroundColor: rarityColor }]}>
            <AppText size="xs" weight="extraBold" color={colors.white}>
              {RARITY_LABELS[rarity]}
            </AppText>
          </View>
        </View>
        <AppText size="sm" color={isUnlocked ? colors.textSecondary : colors.textMuted} numberOfLines={2}>
          {isUnlocked ? exhibit.description : 'Complete the level to unlock this exhibit.'}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.sm,
    borderWidth: 2,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  lockOverlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    gap: spacing.xxs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xs,
  },
  rarityBadge: {
    paddingVertical: 2,
    paddingHorizontal: spacing.xs,
    borderRadius: radius.pill,
  },
});
