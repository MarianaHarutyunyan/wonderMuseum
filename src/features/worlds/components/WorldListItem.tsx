import { WorldCard } from '@components/ui/WorldCard';
import { useWorldSummary } from '@features/worlds/hooks/useWorldSummary';
import type { EmojiToken } from '@theme';
import type { WorldConfig } from '@/types/world.types';

interface WorldListItemProps {
  world: WorldConfig;
  onPress: (worldId: string) => void;
}

/** Binds a `WorldConfig` to the themed `WorldCard` — resolves live progress from the progress store. */
export function WorldListItem({ world, onPress }: WorldListItemProps) {
  const { progress, completedLevels, totalLevels } = useWorldSummary(world);

  return (
    <WorldCard
      world={world.themeToken}
      title={world.title}
      description={world.description}
      progress={progress}
      icon={world.icon as EmojiToken}
      completedLevels={completedLevels}
      totalLevels={totalLevels}
      onPress={() => onPress(world.id)}
    />
  );
}
