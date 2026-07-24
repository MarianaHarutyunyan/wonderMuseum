import { useCallback } from 'react';
import { Pressable } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Card } from '@/components/ui/Card';
import { colors, type ColorToken } from '@/theme';
import type { WorldConfig } from '@/types/world.types';

interface WorldCardProps {
  world: WorldConfig;
  onPress: (worldId: string) => void;
}

export function WorldCard({ world, onPress }: WorldCardProps) {
  const accentColor = colors[world.colorToken as ColorToken] ?? colors.primary;

  const handlePress = useCallback(() => {
    onPress(world.id);
  }, [onPress, world.id]);

  return (
    <Pressable onPress={handlePress} accessibilityRole="button" accessibilityLabel={world.title}>
      <Card accentColor={accentColor}>
        <AppText size="lg" weight="bold">
          {world.title}
        </AppText>
        <AppText size="sm" color={colors.textSecondary}>
          {world.description}
        </AppText>
        <AppText size="xs" color={accentColor} weight="semiBold">
          {`${world.miniGames.length} activities · ${world.exhibits.length} exhibits`}
        </AppText>
      </Card>
    </Pressable>
  );
}
