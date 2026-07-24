import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { AppButton } from '@/components/ui/AppButton';
import { AppText } from '@/components/ui/AppText';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { ExhibitCard } from '@/features/worlds/components/ExhibitCard';
import { MiniGameRow } from '@/features/worlds/components/MiniGameRow';
import { useWorldProgress } from '@/features/worlds/hooks/useWorldProgress';
import { getWorldById } from '@/features/worlds/utils/getWorldById';
import { colors, spacing } from '@/theme';

export default function WorldScreen() {
  const { worldId } = useLocalSearchParams<{ worldId: string }>();
  const world = useMemo(() => getWorldById(worldId), [worldId]);
  const { completedMiniGameIds, unlockedExhibitIds, playMiniGame } = useWorldProgress(world);

  if (!world) {
    return (
      <ScreenContainer>
        <AppText size="md">World not found.</AppText>
        <AppButton label="Go back" onPress={router.back} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <AppButton label="Back" onPress={router.back} variant="secondary" />
          <AppText size="xxl" weight="extraBold">
            {world.title}
          </AppText>
          <AppText size="sm" color={colors.textSecondary}>
            {world.description}
          </AppText>
        </View>

        <AppText size="lg" weight="bold">
          Activities
        </AppText>
        <View style={styles.section}>
          {world.miniGames.map((miniGame) => (
            <MiniGameRow
              key={miniGame.id}
              miniGame={miniGame}
              isCompleted={completedMiniGameIds.includes(miniGame.id)}
              onPlay={playMiniGame}
            />
          ))}
        </View>

        <AppText size="lg" weight="bold">
          Exhibits
        </AppText>
        <View style={styles.section}>
          {world.exhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.id}
              exhibit={exhibit}
              isUnlocked={unlockedExhibitIds.includes(exhibit.id)}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxl,
  },
  header: {
    gap: spacing.xs,
    paddingVertical: spacing.md,
  },
  section: {
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
});
