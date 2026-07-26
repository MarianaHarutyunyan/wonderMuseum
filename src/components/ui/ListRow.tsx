import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { Icon } from '@components/ui/Icon';
import { ProgressBar } from '@components/ui/ProgressBar';
import { useThemeColors } from '@hooks/useThemeColors';
import { spacing, type EmojiToken } from '@theme';

interface ListRowProps {
  icon: EmojiToken;
  title: string;
  progress?: number;
  progressLabel?: string;
  completed?: boolean;
  trailing?: ReactNode;
}

/** Generic icon + title + optional progress row — used by Missions, Statistics, Settings lists. */
export function ListRow({ icon, title, progress, progressLabel, completed = false, trailing }: ListRowProps) {
  const colors = useThemeColors();

  return (
    <Card padding={spacing.sm}>
      <View style={styles.row}>
        <View style={[styles.iconWrap, { backgroundColor: colors.backgroundSecondary }]}>
          <Icon token={icon} size={22} />
        </View>
        <View style={styles.body}>
          <AppText variant="small" weight="bold" numberOfLines={1}>
            {title}
          </AppText>
          {progress !== undefined ? (
            <>
              <ProgressBar progress={progress} gradient="green" height={6} />
              {progressLabel ? <AppText variant="caption">{progressLabel}</AppText> : null}
            </>
          ) : null}
        </View>
        {completed ? <Icon token="check" size={20} /> : trailing}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    gap: spacing.xxs,
  },
});
