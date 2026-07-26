import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@components/ui/AppText';
import { Avatar } from '@components/ui/Avatar';
import { Icon } from '@components/ui/Icon';
import { IconButton } from '@components/ui/IconButton';
import { ProgressBar } from '@components/ui/ProgressBar';
import { StatCard } from '@components/ui/StatCard';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { AVATAR_OPTIONS } from '@content/social';
import { HERO_IMAGE, getHeroFaceCropStyle } from '@assets/images';
import { useThemeColors } from '@hooks/useThemeColors';
import { ROUTES } from '@navigation';
import { useMissionsStore } from '@store/missionsStore';
import { useProfileStore } from '@store/profileStore';
import { useProgressStore } from '@store/progressStore';
import { TAB_BAR_CLEARANCE } from '@constants';
import { colors, radius, spacing } from '@theme';

export default function ProfileScreen() {
  const themeColors = useThemeColors();
  const profile = useProfileStore();
  const completedLevelIds = useProgressStore((state) => state.completedLevelIds);
  const unlockedExhibitIds = useProgressStore((state) => state.unlockedExhibitIds);
  const totalCorrectAnswers = useProgressStore((state) => state.totalCorrectAnswers);
  const collectibles = useProgressStore((state) => state.collectibles);
  const streakDays = useMissionsStore((state) => state.streakDays);

  const totalScore = useMemo(
    () => completedLevelIds.length * 100 + totalCorrectAnswers * 10 + collectibles.star * 5,
    [completedLevelIds.length, totalCorrectAnswers, collectibles.star],
  );

  const achievements = useMemo(
    () => [
      { key: 'first-steps', label: 'First Steps', unlocked: completedLevelIds.length >= 1, gradient: 'gold' as const },
      { key: 'collector', label: 'Collector', unlocked: unlockedExhibitIds.length >= 5, gradient: 'blue' as const },
      { key: 'on-fire', label: 'On Fire', unlocked: streakDays >= 3, gradient: 'orange' as const },
    ],
    [completedLevelIds.length, unlockedExhibitIds.length, streakDays],
  );

  return (
    <ScreenContainer>
      <Header
        title="Profile"
        rightAction={<IconButton icon="settings" accessibilityLabel="Settings" onPress={() => router.push(ROUTES.settings)} />}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.identity}>
          <Avatar
            source={HERO_IMAGE}
            imageStyle={getHeroFaceCropStyle(88 - 6)}
            label={profile.playerName}
            size={88}
            levelBadge={profile.level}
          />
          <AppText variant="subtitle" weight="extraBold">
            {profile.playerName}
          </AppText>
          <View style={styles.levelRow}>
            <View style={styles.xpBar}>
              <ProgressBar progress={profile.xp / profile.xpToNextLevel} gradient="gold" height={8} />
            </View>
            <AppText size="xs" color={themeColors.textSecondary}>
              {profile.xp}/{profile.xpToNextLevel}
            </AppText>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <StatCard label="Levels Completed" value={completedLevelIds.length} gradient="gold" />
          </View>
          <View style={styles.statItem}>
            <StatCard label="Total Score" value={totalScore} gradient="green" />
          </View>
          <View style={styles.statItem}>
            <StatCard label="Exhibits Found" value={unlockedExhibitIds.length} gradient="blue" />
          </View>
          <View style={styles.statItem}>
            <StatCard label="Longest Streak" value={`${streakDays} Days`} gradient="orange" />
          </View>
        </View>

        <AppText size="md" weight="bold">
          Achievements
        </AppText>
        <View style={styles.achievementsRow}>
          {achievements.map((achievement) => (
            <View
              key={achievement.key}
              style={[styles.achievementChip, { opacity: achievement.unlocked ? 1 : 0.4 }]}
            >
              <Icon token={achievement.unlocked ? 'trophy' : 'lock'} size={20} />
              <AppText size="xs" weight="bold" align="center" numberOfLines={1}>
                {achievement.label}
              </AppText>
            </View>
          ))}
        </View>

        <AppText size="md" weight="bold">
          Customize Avatar
        </AppText>
        <View style={styles.avatarRow}>
          {AVATAR_OPTIONS.map((option) => (
            <Pressable key={option.id} onPress={() => profile.setAvatar(option.id)} accessibilityRole="button" accessibilityLabel={option.label}>
              <Avatar
                label={option.label}
                size={56}
                ringColor={profile.avatarId === option.id ? colors.primary : themeColors.border}
              />
            </Pressable>
          ))}
        </View>

        <View style={styles.linkRow}>
          <Pressable onPress={() => router.push(ROUTES.statistics)} accessibilityRole="button" accessibilityLabel="Statistics">
            <AppText size="sm" weight="bold" color={colors.primary}>
              Statistics
            </AppText>
          </Pressable>
          <Pressable onPress={() => router.push(ROUTES.leaderboard)} accessibilityRole="button" accessibilityLabel="Leaderboard">
            <AppText size="sm" weight="bold" color={colors.primary}>
              Leaderboard
            </AppText>
          </Pressable>
          <Pressable onPress={() => router.push(ROUTES.parentMode)} accessibilityRole="button" accessibilityLabel="Parent Mode">
            <AppText size="sm" weight="bold" color={colors.primary}>
              Parent Mode
            </AppText>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: TAB_BAR_CLEARANCE,
    gap: spacing.md,
  },
  identity: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    width: '100%',
  },
  xpBar: {
    flex: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  statItem: {
    width: '47%',
  },
  achievementsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  achievementChip: {
    flex: 1,
    alignItems: 'center',
    gap: spacing.xxs,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  avatarRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
});
