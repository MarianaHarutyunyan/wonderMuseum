import { ScrollView, StyleSheet } from 'react-native';

import { COLLECTIBLE_TYPES } from '@content/rewards';
import { CollectibleBadge } from '@features/collectibles/components/CollectibleBadge';
import { useProgressStore } from '@store/progressStore';
import { spacing } from '@theme';

export function CollectibleSummaryBar() {
  const collectibles = useProgressStore((state) => state.collectibles);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {COLLECTIBLE_TYPES.map((collectibleType) => (
        <CollectibleBadge
          key={collectibleType.id}
          label={collectibleType.label}
          count={collectibles[collectibleType.id]}
          colorToken={collectibleType.colorToken}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xs,
    paddingVertical: spacing.sm,
  },
});
