import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AppButton } from '@components/ui/AppButton';
import { GridTile } from '@components/ui/GridTile';
import { Icon } from '@components/ui/Icon';
import { StatCard } from '@components/ui/StatCard';
import { Toast } from '@components/ui/Toast';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { WORLDS } from '@content/worlds';
import { useThemeColors } from '@hooks/useThemeColors';
import { useProgressStore } from '@store/progressStore';
import { TAB_BAR_CLEARANCE } from '@constants';
import { colors, radius, spacing, type EmojiToken } from '@theme';

const VISITORS_PER_EXHIBIT = 8;
const MUSEUM_CAPACITY = 12;

export default function MuseumScreen() {
  const unlockedExhibitIds = useProgressStore((state) => state.unlockedExhibitIds);
  const [toastVisible, setToastVisible] = useState(false);
  const themeColors = useThemeColors();

  const allExhibits = useMemo(() => WORLDS.flatMap((world) => world.exhibits), []);
  const unlockedExhibits = useMemo(
    () => allExhibits.filter((exhibit) => unlockedExhibitIds.includes(exhibit.id)),
    [allExhibits, unlockedExhibitIds],
  );
  const emptySlotCount = Math.max(0, MUSEUM_CAPACITY - unlockedExhibits.length);

  const handleDecorate = useCallback(() => setToastVisible(true), []);

  return (
    <ScreenContainer>
      <Header title="My Museum" />
      <Toast
        visible={toastVisible}
        message="Decorating is coming soon!"
        variant="info"
        onDismiss={() => setToastVisible(false)}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <StatCard label="Exhibits Placed" value={unlockedExhibits.length} gradient="gold" />
          </View>
          <View style={styles.statItem}>
            <StatCard
              label="Visitors Today"
              value={unlockedExhibits.length * VISITORS_PER_EXHIBIT}
              gradient="green"
            />
          </View>
        </View>

        <View style={styles.grid}>
          {unlockedExhibits.map((exhibit) => (
            <View key={exhibit.id} style={styles.gridItem}>
              <GridTile label={exhibit.title} icon={exhibit.collectibleType as EmojiToken} accentColor={colors.primary} />
            </View>
          ))}
          {Array.from({ length: emptySlotCount }).map((_, index) => (
            <View key={`empty-${index}`} style={styles.gridItem}>
              <View style={[styles.emptySlot, { borderColor: themeColors.border }]}>
                <Icon token="plus" size={20} />
              </View>
            </View>
          ))}
        </View>

        <AppButton label="Decorate" onPress={handleDecorate} variant="secondary" size="lg" />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: TAB_BAR_CLEARANCE,
    gap: spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statItem: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  gridItem: {
    width: '22%',
  },
  emptySlot: {
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: radius.lg,
  },
});
