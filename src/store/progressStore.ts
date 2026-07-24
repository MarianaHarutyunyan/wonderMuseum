import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandMmkvStorage } from '@/services/storage/mmkvStorage';
import type { CollectibleTotals, CollectibleType } from '@/types/collectibles.types';

interface ProgressState {
  collectibles: CollectibleTotals;
  unlockedExhibitIds: string[];
  completedMiniGameIds: string[];
  addCollectible: (type: CollectibleType, amount?: number) => void;
  unlockExhibit: (exhibitId: string) => void;
  completeMiniGame: (miniGameId: string) => void;
  isExhibitUnlocked: (exhibitId: string) => boolean;
  isMiniGameCompleted: (miniGameId: string) => boolean;
}

const initialCollectibles: CollectibleTotals = {
  star: 0,
  coin: 0,
  fossil: 0,
  artifact: 0,
  creature: 0,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      collectibles: initialCollectibles,
      unlockedExhibitIds: [],
      completedMiniGameIds: [],
      addCollectible: (type, amount = 1) =>
        set((state) => ({
          collectibles: {
            ...state.collectibles,
            [type]: state.collectibles[type] + amount,
          },
        })),
      unlockExhibit: (exhibitId) =>
        set((state) =>
          state.unlockedExhibitIds.includes(exhibitId)
            ? state
            : { unlockedExhibitIds: [...state.unlockedExhibitIds, exhibitId] },
        ),
      completeMiniGame: (miniGameId) =>
        set((state) =>
          state.completedMiniGameIds.includes(miniGameId)
            ? state
            : { completedMiniGameIds: [...state.completedMiniGameIds, miniGameId] },
        ),
      isExhibitUnlocked: (exhibitId) => get().unlockedExhibitIds.includes(exhibitId),
      isMiniGameCompleted: (miniGameId) => get().completedMiniGameIds.includes(miniGameId),
    }),
    {
      name: 'wonder-museum-progress',
      storage: createJSONStorage(() => zustandMmkvStorage),
    },
  ),
);
