import { useCallback } from 'react';

import { hapticsService } from '@/services/haptics/hapticsService';
import { useSettingsStore } from '@/store/settingsStore';

export function useHaptics() {
  const hapticsEnabled = useSettingsStore((state) => state.hapticsEnabled);

  const trigger = useCallback(
    (variant: keyof typeof hapticsService) => {
      if (!hapticsEnabled) {
        return;
      }
      void hapticsService[variant]();
    },
    [hapticsEnabled],
  );

  return { trigger };
}
