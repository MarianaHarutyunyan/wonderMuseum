import { useColorScheme } from 'react-native';

import { themes, type ColorScheme } from '@theme';

/**
 * Resolves the app's color tokens for the active color scheme. Defaults to
 * the device scheme; pass an explicit scheme to override it (e.g. a screen
 * that's always dark).
 */
export function useThemeColors(scheme?: ColorScheme) {
  const systemScheme = useColorScheme();
  const resolved: ColorScheme = scheme ?? (systemScheme === 'dark' ? 'dark' : 'light');
  return themes[resolved];
}
