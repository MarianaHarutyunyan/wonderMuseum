import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { useThemeColors } from '@hooks/useThemeColors';
import { gradientAngles, gradients, radius, shadows, spacing, type EmojiToken, type GradientToken } from '@theme';

interface CurrencyPillProps {
  icon: EmojiToken;
  value: number | string;
  onAdd?: () => void;
}

const pillGradientByIcon: Partial<Record<EmojiToken, GradientToken>> = {
  coin: 'gold',
  gem: 'purple',
  energy: 'green',
};

/** Floating gradient pill showing a currency icon + amount, with an optional "+" add button (coins/gems/energy HUD). */
export function CurrencyPill({ icon, value, onAdd }: CurrencyPillProps) {
  const colors = useThemeColors();
  const pillGradient = gradients[pillGradientByIcon[icon] ?? 'blue'];

  return (
    <LinearGradient
      colors={pillGradient}
      start={gradientAngles.diagonal.start}
      end={gradientAngles.diagonal.end}
      style={[styles.pill, shadows.sm, { borderRadius: radius.pill }]}
    >
      <View style={styles.iconBadge}>
        <Icon token={icon} size={16} />
      </View>
      <AppText size="sm" weight="extraBold" color={colors.white}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </AppText>
      {onAdd ? (
        <AnimatedButton onPress={onAdd} accessibilityLabel="Add" pressScale={0.9}>
          <View style={[styles.addButton, { backgroundColor: colors.success }]}>
            <AppText size="xs" weight="extraBold" color={colors.white}>
              +
            </AppText>
          </View>
        </AnimatedButton>
      ) : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.xs,
  },
  iconBadge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
  },
});
