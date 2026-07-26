import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@constants';
import { zustandMmkvStorage } from '@services/storage/mmkvStorage';

const MAX_ENERGY = 50;
const STARTING_COINS = 12450;
const STARTING_GEMS = 320;

interface CurrencyState {
  coins: number;
  gems: number;
  energy: number;
  maxEnergy: number;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  addGems: (amount: number) => void;
  spendGems: (amount: number) => boolean;
  spendEnergy: (amount: number) => boolean;
  refillEnergy: () => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      coins: STARTING_COINS,
      gems: STARTING_GEMS,
      energy: 45,
      maxEnergy: MAX_ENERGY,
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      spendCoins: (amount) => {
        if (get().coins < amount) {
          return false;
        }
        set((state) => ({ coins: state.coins - amount }));
        return true;
      },
      addGems: (amount) => set((state) => ({ gems: state.gems + amount })),
      spendGems: (amount) => {
        if (get().gems < amount) {
          return false;
        }
        set((state) => ({ gems: state.gems - amount }));
        return true;
      },
      spendEnergy: (amount) => {
        if (get().energy < amount) {
          return false;
        }
        set((state) => ({ energy: state.energy - amount }));
        return true;
      },
      refillEnergy: () => set((state) => ({ energy: state.maxEnergy })),
    }),
    {
      name: STORAGE_KEYS.currencyStore,
      storage: createJSONStorage(() => zustandMmkvStorage),
    },
  ),
);
