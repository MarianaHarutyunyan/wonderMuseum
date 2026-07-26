import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { APP_CONFIG } from '@config';
import { STORAGE_KEYS } from '@constants';
import { zustandMmkvStorage } from '@services/storage/mmkvStorage';

interface SettingsState {
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  musicEnabled: boolean;
  parentPin: string;
  toggleSound: () => void;
  toggleHaptics: () => void;
  toggleMusic: () => void;
  setParentPin: (pin: string) => void;
  verifyParentPin: (pin: string) => boolean;
}

const DEFAULT_PARENT_PIN = '1234';

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      soundEnabled: APP_CONFIG.soundEnabledByDefault,
      hapticsEnabled: APP_CONFIG.hapticsEnabledByDefault,
      musicEnabled: true,
      parentPin: DEFAULT_PARENT_PIN,
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      toggleHaptics: () => set((state) => ({ hapticsEnabled: !state.hapticsEnabled })),
      toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
      setParentPin: (pin) => set({ parentPin: pin }),
      verifyParentPin: (pin) => get().parentPin === pin,
    }),
    {
      name: STORAGE_KEYS.settingsStore,
      storage: createJSONStorage(() => zustandMmkvStorage),
    },
  ),
);
