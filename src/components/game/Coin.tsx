import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AppText } from '@components/ui/AppText';
import { gradientAngles, gradients, rewardColors, shadows } from '@theme';

interface CoinProps {
  size?: number;
  count?: number;
}

/** Circular gold coin glyph, optionally paired with a count label. */
export function Coin({ size = 32, count }: CoinProps) {
  return (
    <View style={styles.row}>
      <LinearGradient
        colors={gradients.orange}
        start={gradientAngles.diagonal.start}
        end={gradientAngles.diagonal.end}
        style={[
          styles.coin,
          shadows.sm,
          { width: size, height: size, borderRadius: size / 2, borderColor: rewardColors.coin },
        ]}
      >
        <AppText size="xs" weight="extraBold" color="#7A4A12">
          $
        </AppText>
      </LinearGradient>
      {count !== undefined ? (
        <AppText size="sm" weight="bold">
          {count}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  coin: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
