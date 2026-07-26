import type { StateStorage } from 'zustand/middleware';

/**
 * Web build of the persisted-store storage adapter. `react-native-mmkv` is a native-only
 * module with no web target, so Metro resolves this `.web.ts` file instead of `mmkvStorage.ts`
 * when bundling for web — same `zustandMmkvStorage` contract, backed by `localStorage`.
 */
export const zustandMmkvStorage: StateStorage = {
  getItem: (name) => (typeof localStorage === 'undefined' ? null : localStorage.getItem(name)),
  setItem: (name, value) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(name, value);
    }
  },
  removeItem: (name) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(name);
    }
  },
};
