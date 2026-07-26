import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@constants';
import { zustandMmkvStorage } from '@services/storage/mmkvStorage';

interface ProfileState {
  playerName: string;
  avatarId: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  setAvatar: (avatarId: string) => void;
  addXp: (amount: number) => void;
}

const XP_STEP_INCREMENT = 200;

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      playerName: 'Explorer Alex',
      avatarId: 'explorer',
      level: 24,
      xp: 3240,
      xpToNextLevel: 4000,
      setAvatar: (avatarId) => set({ avatarId }),
      addXp: (amount) =>
        set((state) => {
          const nextXp = state.xp + amount;
          if (nextXp < state.xpToNextLevel) {
            return { xp: nextXp };
          }
          return {
            level: state.level + 1,
            xp: nextXp - state.xpToNextLevel,
            xpToNextLevel: state.xpToNextLevel + XP_STEP_INCREMENT,
          };
        }),
    }),
    {
      name: STORAGE_KEYS.profileStore,
      storage: createJSONStorage(() => zustandMmkvStorage),
    },
  ),
);
