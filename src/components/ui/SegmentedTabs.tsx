import { StyleSheet, View } from 'react-native';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, spacing } from '@theme';

export interface SegmentedTabOption {
  key: string;
  label: string;
}

interface SegmentedTabsProps {
  options: readonly SegmentedTabOption[];
  activeKey: string;
  onSelect: (key: string) => void;
}

/** Pill-style segmented control — Daily/Weekly/Achievements, Exhibits/Cards/Artifacts, etc. */
export function SegmentedTabs({ options, activeKey, onSelect }: SegmentedTabsProps) {
  const colors = useThemeColors();

  return (
    <View style={[styles.track, { backgroundColor: colors.backgroundSecondary, borderRadius: radius.pill }]}>
      {options.map((option) => {
        const active = option.key === activeKey;
        return (
          <AnimatedButton
            key={option.key}
            onPress={() => onSelect(option.key)}
            pressScale={0.96}
            accessibilityLabel={option.label}
            style={styles.segmentWrap}
          >
            <View
              style={[
                styles.segment,
                { borderRadius: radius.pill, backgroundColor: active ? colors.primary : colors.transparent },
              ]}
            >
              <AppText size="sm" weight="bold" color={active ? colors.white : colors.textSecondary}>
                {option.label}
              </AppText>
            </View>
          </AnimatedButton>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    padding: spacing.xxs,
    gap: spacing.xxs,
  },
  segmentWrap: {
    flex: 1,
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
  },
});
