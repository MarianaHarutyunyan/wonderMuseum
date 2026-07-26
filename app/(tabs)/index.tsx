import { useCallback, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { IconButton } from '@components/ui/IconButton';
import { StatCard } from '@components/ui/StatCard';
import { StatusBar } from '@components/layout/StatusBar';
import { DinoCompanion } from '@components/game/DinoCompanion';
import { COLLECTIBLE_TYPES } from '@content/rewards';
import { HERO_IMAGE, MUSEUM_IMAGE } from '@assets/images';
import { useCurrencyStore } from '@store/currencyStore';
import { useMissionsStore } from '@store/missionsStore';
import { useProfileStore } from '@store/profileStore';
import { useProgressStore } from '@store/progressStore';
import { WORLDS } from '@content/worlds';
import { MISSIONS } from '@content/missions';
import { ROUTES } from '@navigation';
import { TAB_BAR_CLEARANCE } from '@constants';
import {
  gradientAngles,
  gradients,
  radius,
  spacing,
  type ColorToken,
  type EmojiToken,
  type GradientToken,
} from '@theme';

const collectibleGradientByColorToken: Partial<Record<ColorToken, GradientToken>> = {
  accentGold: 'gold',
  accentFossil: 'orange',
  accentArtifact: 'blue',
  accentCreature: 'pink',
};

export default function HomeScreen() {
  const profile = useProfileStore();
  const currency = useCurrencyStore();
  const completedLevelIds = useProgressStore((state) => state.completedLevelIds);
  const collectibles = useProgressStore((state) => state.collectibles);
  const canClaimDailyReward = useMissionsStore((state) => state.canClaimDailyReward());

  const nextWorld = useMemo(
    () => WORLDS.find((world) => world.levels.some((level) => !completedLevelIds.includes(level.id))) ?? WORLDS[0],
    [completedLevelIds],
  );
  const openMissionsCount = useMemo(
    () => MISSIONS.filter((mission) => mission.category === 'daily').length,
    [],
  );

  const handlePlay = useCallback(() => {
    if (nextWorld) {
      router.push(ROUTES.world(nextWorld.id));
    }
  }, [nextWorld]);

  return (
    <View style={styles.root}>
      <Image source={MUSEUM_IMAGE} style={styles.backgroundImage} resizeMode="cover" />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.topBar}>
          <StatusBar
            playerName={profile.playerName}
            level={profile.level}
            xp={profile.xp}
            xpToNextLevel={profile.xpToNextLevel}
            energy={currency.energy}
            maxEnergy={currency.maxEnergy}
            coins={currency.coins}
            gems={currency.gems}
            onAddCoins={() => router.push(ROUTES.shop)}
            onAddGems={() => router.push(ROUTES.shop)}
          />
        </View>

        <View style={styles.body}>
          <View style={styles.quickMenu}>
            <IconButton
              icon="gift"
              accessibilityLabel="Daily Reward"
              accentGradient={gradients.pink}
              badgeCount={canClaimDailyReward ? 1 : undefined}
              onPress={() => router.push(ROUTES.dailyReward)}
            />
            <IconButton
              icon="missions"
              accessibilityLabel="Missions"
              accentGradient={gradients.blue}
              badgeCount={openMissionsCount}
              onPress={() => router.push(ROUTES.missions)}
            />
            <IconButton
              icon="museum"
              accessibilityLabel="Museum"
              accentGradient={gradients.purple}
              onPress={() => router.push(ROUTES.museum)}
            />
            <IconButton
              icon="shop"
              accessibilityLabel="Shop"
              accentGradient={gradients.orange}
              onPress={() => router.push(ROUTES.shop)}
            />
          </View>

          <View style={styles.titleWrap}>
            <AppText variant="titleXl" weight="extraBold" color="#FFFFFF" shadow>
              WONDER
            </AppText>
            <AppText variant="titleXl" weight="extraBold" color="#FFA63A" shadow>
              MUSEUM
            </AppText>
            <LinearGradient
              colors={gradients.purple}
              start={gradientAngles.horizontal.start}
              end={gradientAngles.horizontal.end}
              style={styles.subtitlePill}
            >
              <AppText size="xs" weight="extraBold" color="#FFFFFF">
                Learn • Explore • Collect
              </AppText>
            </LinearGradient>
          </View>

          <View style={styles.illustration}>
            <Image source={HERO_IMAGE} style={styles.heroCharacterImage} resizeMode="contain" />
            <DinoCompanion size={56} />
          </View>

          <View style={styles.ctaBlock}>
            <AppButton label="Continue Adventure" onPress={handlePlay} variant="warning" size="lg" />

            <View style={styles.statsRow}>
              {COLLECTIBLE_TYPES.map((collectibleType) => (
                <View key={collectibleType.id} style={styles.statCard}>
                  <StatCard
                    label={collectibleType.label}
                    value={collectibles[collectibleType.id]}
                    gradient={collectibleGradientByColorToken[collectibleType.colorToken as ColorToken] ?? 'blue'}
                    icon={<Icon token={collectibleType.icon as EmojiToken} size={22} color="#FFFFFF" />}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFill,
  },
  safeArea: {
    flex: 1,
  },
  topBar: {
    paddingHorizontal: spacing.md,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingBottom: TAB_BAR_CLEARANCE,
  },
  quickMenu: {
    position: 'absolute',
    top: spacing.xs,
    right: spacing.md,
    gap: spacing.xs,
  },
  titleWrap: {
    marginTop: spacing.lg,
    paddingRight: 64,
    gap: spacing.xxs,
    alignItems: 'flex-start',
  },
  subtitlePill: {
    marginTop: spacing.xxs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.pill,
  },
  illustration: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  heroCharacterImage: {
    width: 84,
    height: 126,
  },
  ctaBlock: {
    gap: spacing.sm,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  statCard: {
    flex: 1,
  },
});
