import { useCallback } from 'react';

import { useHaptics } from '@hooks/useHaptics';
import { useProgressStore } from '@store/progressStore';
import type { WorldConfig } from '@/types/world.types';

export function useWorldProgress(world: WorldConfig | undefined) {
  const completedMiniGameIds = useProgressStore((state) => state.completedMiniGameIds);
  const unlockedExhibitIds = useProgressStore((state) => state.unlockedExhibitIds);
  const completeMiniGame = useProgressStore((state) => state.completeMiniGame);
  const unlockExhibit = useProgressStore((state) => state.unlockExhibit);
  const addCollectible = useProgressStore((state) => state.addCollectible);
  const { trigger } = useHaptics();

  const playMiniGame = useCallback(
    (miniGameId: string) => {
      const miniGame = world?.miniGames.find((game) => game.id === miniGameId);
      if (!miniGame) {
        return;
      }

      completeMiniGame(miniGame.id);
      unlockExhibit(miniGame.unlocksExhibitId);
      addCollectible('star', 1);
      trigger('success');
    },
    [world, completeMiniGame, unlockExhibit, addCollectible, trigger],
  );

  return {
    completedMiniGameIds,
    unlockedExhibitIds,
    playMiniGame,
  };
}
