import { useMemo } from 'react';

import { useProgressStore } from '@store/progressStore';
import type { WorldConfig } from '@/types/world.types';

interface WorldSummary {
  completedLevels: number;
  totalLevels: number;
  progress: number;
  isComplete: boolean;
}

export function useWorldSummary(world: WorldConfig): WorldSummary {
  const completedLevelIds = useProgressStore((state) => state.completedLevelIds);

  return useMemo(() => {
    const totalLevels = world.levels.length;
    const completedLevels = world.levels.filter((level) => completedLevelIds.includes(level.id)).length;
    return {
      completedLevels,
      totalLevels,
      progress: totalLevels === 0 ? 0 : completedLevels / totalLevels,
      isComplete: totalLevels > 0 && completedLevels === totalLevels,
    };
  }, [world.levels, completedLevelIds]);
}
