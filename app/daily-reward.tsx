import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { useCurrencyStore } from '@store/currencyStore';
import { useMissionsStore } from '@store/missionsStore';
import { gradientAngles, gradients, radius, spacing } from '@theme';

const REWARD_DAYS = 7;
const COINS_PER_DAY = 15;

export default function DailyRewardScreen() {
  const streakDays = useMissionsStore((state) => state.streakDays);
  const canClaim = useMissionsStore((state) => state.canClaimDailyReward());
  const claimDailyReward = useMissionsStore((state) => state.claimDailyReward);
  const addCoins = useCurrencyStore((state) => state.addCoins);

  const currentDayInCycle = streakDays % REWARD_DAYS;
  const rewardAmount = (currentDayInCycle + 1) * COINS_PER_DAY;

  const days = useMemo(() => Array.from({ length: REWARD_DAYS }, (_, index) => index), []);

  const handleClaim = () => {
    claimDailyReward();
    addCoins(rewardAmount);
    router.back();
  };

  return (
    <LinearGradient
      colors={gradients.pink}
      start={gradientAngles.diagonal.start}
      end={gradientAngles.diagonal.end}
      style={styles.root}
    >
      <Icon token="gift" size={64} />
      <AppText variant="title" weight="extraBold" align="center" color="#FFFFFF">
        Daily Reward
      </AppText>
      <AppText variant="small" align="center" color="rgba(255,255,255,0.85)">
        Come back every day for bigger rewards!
      </AppText>

      <View style={styles.daysRow}>
        {days.map((day) => {
          const isClaimedDay = day < currentDayInCycle;
          const isTodayDay = day === currentDayInCycle;
          return (
            <View
              key={day}
              style={[
                styles.dayCell,
                { borderRadius: radius.sm },
                isTodayDay ? styles.dayCellToday : null,
                isClaimedDay ? styles.dayCellClaimed : null,
              ]}
            >
              <Icon token="coin" size={18} />
              <AppText size="xs" weight="bold" color="#FFFFFF">
                {(day + 1) * COINS_PER_DAY}
              </AppText>
            </View>
          );
        })}
      </View>

      <AppButton
        label={canClaim ? `Claim +${rewardAmount} coins` : 'Come back tomorrow'}
        onPress={handleClaim}
        variant="success"
        size="lg"
        disabled={!canClaim}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  daysRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.xs,
    marginVertical: spacing.md,
  },
  dayCell: {
    width: 48,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    gap: 2,
  },
  dayCellToday: {
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  dayCellClaimed: {
    opacity: 0.5,
  },
});
