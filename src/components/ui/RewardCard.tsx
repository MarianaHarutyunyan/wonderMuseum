import { StyleSheet, View } from 'react-native';

import { StatCard } from '@components/ui/StatCard';
import { Coin, Star } from '@components/game';
import type { GradientToken, RewardColorToken } from '@theme';

interface RewardCardProps {
  reward: RewardColorToken;
  label: string;
  count: number;
}

const gradientByReward: Record<RewardColorToken, GradientToken> = {
  star: 'gold',
  coin: 'gold',
  fossil: 'orange',
  artifact: 'blue',
  creature: 'pink',
};

/** Gradient card showing a single collectible type — icon, running count, and label. */
export function RewardCard({ reward, label, count }: RewardCardProps) {
  return (
    <StatCard
      label={label}
      value={count}
      gradient={gradientByReward[reward]}
      icon={
        <View style={styles.iconBadge}>
          {reward === 'coin' ? <Coin size={22} /> : <Star size={22} color="#FFFFFF" />}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
