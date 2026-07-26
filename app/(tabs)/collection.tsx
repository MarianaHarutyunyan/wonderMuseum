import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { GridTile } from '@components/ui/GridTile';
import { SegmentedTabs } from '@components/ui/SegmentedTabs';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { COLLECTIBLE_TYPES } from '@content/rewards';
import { WORLDS } from '@content/worlds';
import { useProgressStore } from '@store/progressStore';
import { TAB_BAR_CLEARANCE } from '@constants';
import { colors, spacing, type ColorToken, type EmojiToken } from '@theme';
import type { CollectibleType } from '@/types/collectibles.types';

const TABS: { key: CollectibleType; label: string }[] = COLLECTIBLE_TYPES.map((type) => ({
  key: type.id,
  label: type.label,
}));

export default function CollectionScreen() {
  const [activeTab, setActiveTab] = useState<CollectibleType>(TABS[0]?.key ?? 'star');
  const unlockedExhibitIds = useProgressStore((state) => state.unlockedExhibitIds);

  const allExhibits = useMemo(() => WORLDS.flatMap((world) => world.exhibits), []);
  const activeExhibits = useMemo(
    () => allExhibits.filter((exhibit) => exhibit.collectibleType === activeTab),
    [allExhibits, activeTab],
  );
  const activeAccent = colors[COLLECTIBLE_TYPES.find((type) => type.id === activeTab)?.colorToken as ColorToken] ?? colors.primary;

  return (
    <ScreenContainer>
      <Header title="Collection" />
      <View style={styles.tabsWrap}>
        <SegmentedTabs options={TABS} activeKey={activeTab} onSelect={(key) => setActiveTab(key as CollectibleType)} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppText size="sm" weight="bold" color={colors.textSecondary}>
          {activeExhibits.filter((exhibit) => unlockedExhibitIds.includes(exhibit.id)).length}/{activeExhibits.length}{' '}
          discovered
        </AppText>

        <View style={styles.grid}>
          {activeExhibits.map((exhibit) => (
            <View key={exhibit.id} style={styles.gridItem}>
              <GridTile
                label={exhibit.title}
                icon={exhibit.collectibleType as EmojiToken}
                locked={!unlockedExhibitIds.includes(exhibit.id)}
                accentColor={activeAccent}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  tabsWrap: {
    marginBottom: spacing.sm,
  },
  content: {
    paddingBottom: TAB_BAR_CLEARANCE,
    gap: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  gridItem: {
    width: '30%',
  },
});
