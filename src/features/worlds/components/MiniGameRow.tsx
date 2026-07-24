import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { AppText } from '@/components/ui/AppText';
import { Card } from '@/components/ui/Card';
import { colors, spacing } from '@/theme';
import type { MiniGameConfig } from '@/types/world.types';

interface MiniGameRowProps {
  miniGame: MiniGameConfig;
  isCompleted: boolean;
  onPlay: (miniGameId: string) => void;
}

export function MiniGameRow({ miniGame, isCompleted, onPlay }: MiniGameRowProps) {
  const handlePlay = useCallback(() => {
    onPlay(miniGame.id);
  }, [onPlay, miniGame.id]);

  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.info}>
          <AppText size="md" weight="bold">
            {miniGame.title}
          </AppText>
          <AppText size="sm" color={colors.textSecondary}>
            {miniGame.description}
          </AppText>
        </View>
        <AppButton
          label={isCompleted ? 'Replay' : 'Play'}
          onPress={handlePlay}
          variant={isCompleted ? 'secondary' : 'primary'}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  info: {
    flex: 1,
  },
});
