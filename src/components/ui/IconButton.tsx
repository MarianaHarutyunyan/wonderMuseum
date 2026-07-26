import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { Badge } from '@components/ui/Badge';
import { Icon } from '@components/ui/Icon';
import { useThemeColors } from '@hooks/useThemeColors';
import { gradientAngles, radius, shadows, spacing, type EmojiToken, type GradientColors } from '@theme';

interface IconButtonProps {
  icon: EmojiToken;
  onPress: () => void;
  size?: number;
  badgeCount?: number;
  accessibilityLabel: string;
  /** Renders as a colorful gradient square instead of the default frosted circle (quick-action buttons). */
  accentGradient?: GradientColors;
}

/** Rounded surface button for a single glyph action (header/quick-nav icons), with an optional count badge. */
export function IconButton({ icon, onPress, size = 48, badgeCount, accessibilityLabel, accentGradient }: IconButtonProps) {
  const colors = useThemeColors();

  const inner = (
    <>
      <Icon token={icon} size={size * 0.5} color={colors.white} />
      {badgeCount ? (
        <View style={styles.badge}>
          <Badge label={String(badgeCount)} color={colors.error} />
        </View>
      ) : null}
    </>
  );

  if (accentGradient) {
    return (
      <AnimatedButton onPress={onPress} accessibilityLabel={accessibilityLabel} pressScale={0.94}>
        <LinearGradient
          colors={accentGradient}
          start={gradientAngles.diagonal.start}
          end={gradientAngles.diagonal.end}
          style={[styles.surface, shadows.md, { width: size, height: size, borderRadius: radius.lg }]}
        >
          {inner}
        </LinearGradient>
      </AnimatedButton>
    );
  }

  return (
    <AnimatedButton onPress={onPress} accessibilityLabel={accessibilityLabel} pressScale={0.94}>
      <View
        style={[
          styles.surface,
          shadows.sm,
          { width: size, height: size, borderRadius: radius.md, backgroundColor: colors.surfaceElevated },
        ]}
      >
        {inner}
      </View>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  surface: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -spacing.xxs,
    right: -spacing.xxs,
  },
});
