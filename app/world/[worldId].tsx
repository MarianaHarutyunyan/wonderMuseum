import { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { ProgressBar } from '@components/ui/ProgressBar';
import { TreasureChest } from '@components/game/TreasureChest';
import { Star } from '@components/game/Star';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { ExhibitCard, type Rarity } from '@features/worlds/components/ExhibitCard';
import { LevelTile } from '@features/worlds/components/LevelTile';
import { useWorldProgress } from '@features/worlds/hooks/useWorldProgress';
import { getWorldById } from '@features/worlds/utils/getWorldById';
import { useThemeColors } from '@hooks/useThemeColors';
import { ROUTES } from '@navigation';
import { colors, gradientAngles, radius, shadows, spacing, worldThemes, type ColorToken, type EmojiToken } from '@theme';
import type { LevelConfig } from '@/types/world.types';

const RARITY_CYCLE: readonly Rarity[] = ['common', 'rare', 'epic', 'legendary'];

export default function WorldScreen() {
  const { worldId } = useLocalSearchParams<{ worldId: string }>();
  const world = useMemo(() => getWorldById(worldId), [worldId]);
  const themeColors = useThemeColors();
  const { completedLevelIds, unlockedExhibitIds, levelStars } = useWorldProgress();

  const isLevelLocked = useCallback(
    (level: LevelConfig, index: number) => {
      if (index === 0) {
        return false;
      }
      const previousLevel = world?.levels[index - 1];
      return previousLevel ? !completedLevelIds.includes(previousLevel.id) : false;
    },
    [world, completedLevelIds],
  );

  const handlePlayLevel = useCallback(
    (levelId: string) => {
      if (!world) {
        return;
      }
      router.push(ROUTES.play(world.id, levelId));
    },
    [world],
  );

  if (!world) {
    return (
      <ScreenContainer>
        <AppText size="md">World not found.</AppText>
        <AppButton label="Go back" onPress={router.back} />
      </ScreenContainer>
    );
  }

  const accentColor = colors[world.colorToken as ColorToken] ?? colors.primary;
  const accentGradient = worldThemes[world.themeToken].gradient;

  const totalStars = world.levels.reduce((sum, level) => sum + (levelStars[level.id] ?? 0), 0);
  const maxStars = world.levels.length * 3;
  const worldProgress = world.levels.length === 0 ? 0 : completedLevelIds.filter((id) => world.levels.some((l) => l.id === id)).length / world.levels.length;

  return (
    <ScreenContainer>
      <Header title={world.title} onBack={router.back} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#63D76B', '#4FBF52']}
          start={gradientAngles.diagonal.start}
          end={gradientAngles.diagonal.end}
          style={[styles.hero, shadows.lg]}
        >
          <View style={styles.heroIllustration}>
            <Icon token={world.icon as EmojiToken} size={72} />
          </View>
          <AppText size="sm" color="rgba(255,255,255,0.9)" align="center">
            {world.description}
          </AppText>
          <View style={styles.heroStars}>
            <Star size={18} color="#FFD54A" />
            <AppText size="md" weight="extraBold" color="#FFFFFF">
              {totalStars} / {maxStars}
            </AppText>
          </View>
          <ProgressBar progress={worldProgress} gradient="gold" height={10} />
        </LinearGradient>

        <AppText size="lg" weight="bold" color={themeColors.textPrimary}>
          Levels
        </AppText>
        <View style={styles.grid}>
          {world.levels.map((level, index) => (
            <View key={level.id} style={styles.gridItemRow}>
              <View style={styles.gridItem}>
                <LevelTile
                  levelNumber={level.index}
                  stars={levelStars[level.id] ?? 0}
                  locked={isLevelLocked(level, index)}
                  accentColor={accentColor}
                  accentGradient={accentGradient}
                  onPress={() => handlePlayLevel(level.id)}
                />
              </View>
              {level.index % 5 === 0 ? (
                <View style={styles.chestMarker}>
                  <TreasureChest size={26} />
                </View>
              ) : null}
            </View>
          ))}
        </View>

        <AppText size="lg" weight="bold" color={themeColors.textPrimary}>
          Exhibits
        </AppText>
        <View style={styles.section}>
          {world.exhibits.map((exhibit, index) => (
            <ExhibitCard
              key={exhibit.id}
              exhibit={exhibit}
              isUnlocked={unlockedExhibitIds.includes(exhibit.id)}
              rarity={RARITY_CYCLE[index % RARITY_CYCLE.length]}
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
    gap: spacing.sm,
  },
  hero: {
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm,
    alignItems: 'center',
  },
  heroIllustration: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroStars: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  gridItemRow: {
    width: '30%',
    alignItems: 'center',
    gap: spacing.xxs,
  },
  gridItem: {
    width: '100%',
  },
  chestMarker: {
    alignItems: 'center',
  },
  section: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
});
