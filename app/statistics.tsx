import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@components/ui/AppText';
import { RewardCard } from '@components/ui/RewardCard';
import { StatCard } from '@components/ui/StatCard';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { COLLECTIBLE_TYPES } from '@content/rewards';
import { WORLDS } from '@content/worlds';
import { useMissionsStore } from '@store/missionsStore';
import { useProgressStore } from '@store/progressStore';
import { colors, spacing } from '@theme';

export default function StatisticsScreen() {
  const completedLevelIds = useProgressStore((state) => state.completedLevelIds);
  const unlockedExhibitIds = useProgressStore((state) => state.unlockedExhibitIds);
  const totalCorrectAnswers = useProgressStore((state) => state.totalCorrectAnswers);
  const totalQuestionsAnswered = useProgressStore((state) => state.totalQuestionsAnswered);
  const collectibles = useProgressStore((state) => state.collectibles);
  const streakDays = useMissionsStore((state) => state.streakDays);

  const totalLevels = useMemo(() => WORLDS.reduce((sum, world) => sum + world.levels.length, 0), []);
  const totalExhibits = useMemo(() => WORLDS.reduce((sum, world) => sum + world.exhibits.length, 0), []);
  const accuracy = totalQuestionsAnswered === 0 ? 0 : Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100);

  return (
    <ScreenContainer>
      <Header title="Statistics" onBack={router.back} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <StatCard label="Levels Completed" value={`${completedLevelIds.length}/${totalLevels}`} accentColor={colors.primary} />
          </View>
          <View style={styles.gridItem}>
            <StatCard label="Exhibits Found" value={`${unlockedExhibitIds.length}/${totalExhibits}`} accentColor={colors.accentArtifact} />
          </View>
          <View style={styles.gridItem}>
            <StatCard label="Answer Accuracy" value={`${accuracy}%`} accentColor={colors.success} />
          </View>
          <View style={styles.gridItem}>
            <StatCard label="Day Streak" value={streakDays} accentColor={colors.orange} />
          </View>
        </View>

        <AppText size="md" weight="bold">
          Collectibles
        </AppText>
        <View style={styles.grid}>
          {COLLECTIBLE_TYPES.map((type) => (
            <View key={type.id} style={styles.cardItem}>
              <RewardCard reward={type.id} label={type.label} count={collectibles[type.id]} />
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  gridItem: {
    width: '47%',
  },
  cardItem: {
    width: '30%',
  },
});
