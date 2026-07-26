import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@constants';
import { zustandMmkvStorage } from '@services/storage/mmkvStorage';
import type { CollectibleTotals, CollectibleType } from '@/types/collectibles.types';

interface LevelResultInput {
  levelId: string;
  exhibitId: string;
  starsEarned: number;
  correctAnswers: number;
  totalQuestions: number;
  collectibleType: CollectibleType;
}

interface ProgressState {
  collectibles: CollectibleTotals;
  unlockedExhibitIds: string[];
  completedLevelIds: string[];
  levelStars: Record<string, number>;
  totalCorrectAnswers: number;
  totalQuestionsAnswered: number;
  addCollectible: (type: CollectibleType, amount?: number) => void;
  recordLevelResult: (result: LevelResultInput) => void;
  isExhibitUnlocked: (exhibitId: string) => boolean;
  isLevelCompleted: (levelId: string) => boolean;
  resetProgress: () => void;
}

const initialCollectibles: CollectibleTotals = {
  star: 0,
  fossil: 0,
  artifact: 0,
  creature: 0,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      collectibles: initialCollectibles,
      unlockedExhibitIds: [],
      completedLevelIds: [],
      levelStars: {},
      totalCorrectAnswers: 0,
      totalQuestionsAnswered: 0,
      addCollectible: (type, amount = 1) =>
        set((state) => ({
          collectibles: {
            ...state.collectibles,
            [type]: state.collectibles[type] + amount,
          },
        })),
      recordLevelResult: ({ levelId, exhibitId, starsEarned, correctAnswers, totalQuestions, collectibleType }) =>
        set((state) => {
          const previousStars = state.levelStars[levelId] ?? 0;
          return {
            completedLevelIds: state.completedLevelIds.includes(levelId)
              ? state.completedLevelIds
              : [...state.completedLevelIds, levelId],
            unlockedExhibitIds: state.unlockedExhibitIds.includes(exhibitId)
              ? state.unlockedExhibitIds
              : [...state.unlockedExhibitIds, exhibitId],
            levelStars: { ...state.levelStars, [levelId]: Math.max(previousStars, starsEarned) },
            collectibles: {
              ...state.collectibles,
              star: state.collectibles.star + starsEarned,
              [collectibleType]: state.collectibles[collectibleType] + 1,
            },
            totalCorrectAnswers: state.totalCorrectAnswers + correctAnswers,
            totalQuestionsAnswered: state.totalQuestionsAnswered + totalQuestions,
          };
        }),
      isExhibitUnlocked: (exhibitId) => get().unlockedExhibitIds.includes(exhibitId),
      isLevelCompleted: (levelId) => get().completedLevelIds.includes(levelId),
      resetProgress: () =>
        set({
          collectibles: initialCollectibles,
          unlockedExhibitIds: [],
          completedLevelIds: [],
          levelStars: {},
          totalCorrectAnswers: 0,
          totalQuestionsAnswered: 0,
        }),
    }),
    {
      name: STORAGE_KEYS.progressStore,
      storage: createJSONStorage(() => zustandMmkvStorage),
    },
  ),
);
