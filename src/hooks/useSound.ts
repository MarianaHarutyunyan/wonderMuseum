import { useCallback } from 'react';
import type { AVPlaybackSource } from 'expo-av';

import { soundService } from '@services/audio/soundService';
import { useSettingsStore } from '@store/settingsStore';

export function useSound() {
  const soundEnabled = useSettingsStore((state) => state.soundEnabled);

  const play = useCallback(
    (source: AVPlaybackSource) => {
      if (!soundEnabled) {
        return;
      }
      void soundService.play(source);
    },
    [soundEnabled],
  );

  return { play };
}
