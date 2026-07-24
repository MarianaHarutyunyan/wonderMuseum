import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { useHaptics } from '@hooks/useHaptics';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, shadows, spacing } from '@theme';

export interface BottomNavItem {
  key: string;
  label: string;
  icon: string;
}

interface BottomNavigationProps {
  items: readonly BottomNavItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

/** Rounded, floating tab bar — active tab gets a pill highlight. */
export function BottomNavigation({ items, activeKey, onSelect }: BottomNavigationProps) {
  const colors = useThemeColors();
  const { trigger } = useHaptics();

  return (
    <View style={[styles.bar, shadows.lg, { backgroundColor: colors.surface, borderRadius: radius.bottomSheet / 2 }]}>
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
            style={[
              styles.tab,
              { borderRadius: radius.pill, backgroundColor: active ? colors.primary : colors.transparent },
            ]}
          >
            <AppText size="lg">{item.icon}</AppText>
            <AppText size="xs" weight="bold" color={active ? colors.white : colors.textMuted}>
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
    flexDirection: 'row',
    padding: spacing.xs,
    gap: spacing.xs,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    gap: 2,
  },
});
