import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@constants';
import { zustandMmkvStorage } from '@services/storage/mmkvStorage';

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

interface MissionsState {
  progress: Record<string, number>;
  claimed: Record<string, boolean>;
  streakDays: number;
  lastClaimedDate: string | null;
  incrementProgress: (missionId: string, amount?: number) => void;
  claimMission: (missionId: string) => void;
  canClaimDailyReward: () => boolean;
  claimDailyReward: () => void;
}

export const useMissionsStore = create<MissionsState>()(
  persist(
    (set, get) => ({
      progress: {},
      claimed: {},
      streakDays: 12,
      lastClaimedDate: null,
      incrementProgress: (missionId, amount = 1) =>
        set((state) => ({
          progress: { ...state.progress, [missionId]: (state.progress[missionId] ?? 0) + amount },
        })),
      claimMission: (missionId) => set((state) => ({ claimed: { ...state.claimed, [missionId]: true } })),
      canClaimDailyReward: () => get().lastClaimedDate !== todayKey(),
      claimDailyReward: () =>
        set((state) => ({
          streakDays: state.lastClaimedDate === todayKey() ? state.streakDays : state.streakDays + 1,
          lastClaimedDate: todayKey(),
        })),
    }),
    {
      name: STORAGE_KEYS.missionsStore,
      storage: createJSONStorage(() => zustandMmkvStorage),
    },
  ),
);
