import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { spacing } from '@theme';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightAction?: ReactNode;
}

/** Screen header — optional back button, title, optional right-side action. */
export function Header({ title, onBack, rightAction }: HeaderProps) {
  const colors = useThemeColors();

  return (
    <View style={styles.row}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel="Go back" hitSlop={12}>
            <AppText size="xl" weight="bold" color={colors.primary}>
              ‹
            </AppText>
          </Pressable>
        ) : null}
      </View>
      <View style={styles.titleWrap}>
        <AppText variant="title" weight="extraBold" align="center" numberOfLines={1}>
          {title}
        </AppText>
      </View>
      <View style={[styles.side, styles.sideEnd]}>{rightAction}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },
  side: {
    minWidth: 32,
  },
  titleWrap: {
    flex: 1,
  },
  sideEnd: {
    alignItems: 'flex-end',
  },
});
