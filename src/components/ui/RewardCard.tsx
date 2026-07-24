import { StyleSheet, View } from 'react-native';

import { Card } from '@components/ui/Card';
import { AppText } from '@components/ui/AppText';
import { Coin, Star } from '@components/game';
import { rewardColors, spacing, type RewardColorToken } from '@theme';

interface RewardCardProps {
  reward: RewardColorToken;
  label: string;
  count: number;
}

/** Card showing a single collectible type — icon, running count, and label. */
export function RewardCard({ reward, label, count }: RewardCardProps) {
  const accent = rewardColors[reward];

  return (
    <Card accentColor={accent} padding={spacing.sm}>
      <View style={styles.row}>
        {reward === 'coin' ? <Coin size={28} /> : <Star size={28} color={accent} />}
        <AppText variant="subtitle" weight="extraBold" color={accent}>
          {count}
        </AppText>
      </View>
      <AppText variant="caption">{label}</AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
});
