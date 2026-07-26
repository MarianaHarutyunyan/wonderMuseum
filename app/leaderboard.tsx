import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@components/ui/AppText';
import { Avatar } from '@components/ui/Avatar';
import { Card } from '@components/ui/Card';
import { Icon } from '@components/ui/Icon';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { LEADERBOARD_ENTRIES } from '@content/social';
import { colors, spacing } from '@theme';

const MEDAL_RANKS = [1, 2, 3];

export default function LeaderboardScreen() {
  return (
    <ScreenContainer>
      <Header title="Leaderboard" onBack={router.back} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {LEADERBOARD_ENTRIES.map((entry) => (
          <Card key={entry.rank} accentColor={entry.isPlayer ? colors.primary : undefined}>
            <View style={styles.row}>
              <View style={styles.rankWrap}>
                {MEDAL_RANKS.includes(entry.rank) ? (
                  <Icon token="medal" size={22} />
                ) : (
                  <AppText size="sm" weight="extraBold" color={colors.textSecondary}>
                    {entry.rank}
                  </AppText>
                )}
              </View>
              <Avatar label={entry.name} size={40} />
              <AppText size="md" weight="bold" numberOfLines={1}>
                {entry.name}
              </AppText>
              <View style={styles.scoreWrap}>
                <AppText size="md" weight="extraBold" color={colors.primary}>
                  {entry.score.toLocaleString()}
                </AppText>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  rankWrap: {
    width: 28,
    alignItems: 'center',
  },
  scoreWrap: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
