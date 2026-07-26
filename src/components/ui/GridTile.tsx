import { StyleSheet, View } from 'react-native';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { useThemeColors } from '@hooks/useThemeColors';
import { glowShadow, radius, spacing, type EmojiToken } from '@theme';

interface GridTileProps {
  label: string;
  icon: EmojiToken;
  locked?: boolean;
  accentColor?: string;
  onPress?: () => void;
}

/** Square collectible tile with a rarity-glow border — used by Collection and My Museum grids. */
export function GridTile({ label, icon, locked = false, accentColor, onPress }: GridTileProps) {
  const colors = useThemeColors();
  const tint = accentColor ?? colors.primary;
  const content = (
    <View
      style={[
        styles.tile,
        locked ? undefined : glowShadow(tint),
        {
          backgroundColor: locked ? colors.surfaceElevated : colors.surface,
          borderRadius: radius.lg,
          borderColor: locked ? colors.border : tint,
        },
      ]}
    >
      <View style={[styles.iconWrap, { opacity: locked ? 0.35 : 1 }]}>
        <Icon token={locked ? 'lock' : icon} size={32} />
      </View>
      <AppText size="xs" weight="bold" align="center" color={locked ? colors.textMuted : colors.textPrimary} numberOfLines={1}>
        {locked ? 'Locked' : label}
      </AppText>
    </View>
  );

  if (!onPress) {
    return content;
  }

  return (
    <AnimatedButton onPress={onPress} disabled={locked} pressScale={0.95} accessibilityLabel={label}>
      {content}
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  tile: {
    aspectRatio: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xxs,
    padding: spacing.xs,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
