import { createMMKV } from 'react-native-mmkv';
import type { StateStorage } from 'zustand/middleware';

import { STORAGE_KEYS } from '@constants';

export const mmkv = createMMKV({ id: STORAGE_KEYS.mmkvInstanceId });

export const zustandMmkvStorage: StateStorage = {
  getItem: (name) => mmkv.getString(name) ?? null,
  setItem: (name, value) => {
    mmkv.set(name, value);
  },
  removeItem: (name) => {
    mmkv.remove(name);
  },
};
