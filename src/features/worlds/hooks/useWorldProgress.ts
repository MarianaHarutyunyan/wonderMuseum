import { useProgressStore } from '@store/progressStore';

/** Read-only progress selectors for the Level Select screen — level/exhibit unlock state. */
export function useWorldProgress() {
  const completedLevelIds = useProgressStore((state) => state.completedLevelIds);
  const unlockedExhibitIds = useProgressStore((state) => state.unlockedExhibitIds);
  const levelStars = useProgressStore((state) => state.levelStars);

  return { completedLevelIds, unlockedExhibitIds, levelStars };
}
