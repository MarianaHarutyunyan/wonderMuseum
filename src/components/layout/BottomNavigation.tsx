import { Pressable, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { useHaptics } from '@hooks/useHaptics';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, spacing, type EmojiToken } from '@theme';

export interface BottomNavItem {
  key: string;
  label: string;
  icon: EmojiToken;
}

interface BottomNavigationProps {
  items: readonly BottomNavItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

const NAV_BAR_HEIGHT = 72;

/**
 * Tab bar — every item, active or not, stays fully inside the 72px bar (no floating/overflowing
 * indicator). The active tab gets a contained pill highlight instead of popping out above the bar.
 */
export function BottomNavigation({ items, activeKey, onSelect }: BottomNavigationProps) {
  const colors = useThemeColors();
  const { trigger } = useHaptics();

  return (
    <View style={[styles.bar, { backgroundColor: colors.surface, borderRadius: radius.bottomSheet }]}>
      <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
      <View style={styles.topBorder} />
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <Pressable
            key={item.key}
            onPress={() => {
              trigger('light');
              onSelect(item.key);
            }}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            style={styles.tab}
          >
            <View style={[styles.iconWrap, active && { backgroundColor: colors.surfaceElevated }]}>
              <Icon token={item.icon} size={20} color={active ? colors.gold : colors.textMuted} />
            </View>
            <AppText size="xs" weight="bold" color={active ? colors.gold : colors.textMuted}>
              {item.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xs,
    overflow: 'hidden',
  },
  topBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(166, 176, 230, 0.18)',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  iconWrap: {
    width: 36,
    height: 28,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
