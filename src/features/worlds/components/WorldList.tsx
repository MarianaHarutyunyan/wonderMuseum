import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlashList, type ListRenderItem } from '@shopify/flash-list';

import { WorldCard } from '@/features/worlds/components/WorldCard';
import { spacing } from '@/theme';
import type { WorldConfig } from '@/types/world.types';

interface WorldListProps {
  worlds: readonly WorldConfig[];
  onSelectWorld: (worldId: string) => void;
}

function keyExtractor(world: WorldConfig): string {
  return world.id;
}

export function WorldList({ worlds, onSelectWorld }: WorldListProps) {
  const renderItem = useCallback<ListRenderItem<WorldConfig>>(
    ({ item }) => (
      <View style={styles.itemSpacing}>
        <WorldCard world={item} onPress={onSelectWorld} />
      </View>
    ),
    [onSelectWorld],
  );

  return (
    <FlashList
      data={worlds as WorldConfig[]}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: spacing.md,
  },
  itemSpacing: {
    marginBottom: spacing.sm,
  },
});
