import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { router, Slot, usePathname } from 'expo-router';

import { BottomNavigation, type BottomNavItem } from '@components/layout/BottomNavigation';
import { spacing } from '@theme';

const TAB_ITEMS: readonly (BottomNavItem & { path: string })[] = [
  { key: 'home', label: 'Home', icon: 'home', path: '/' },
  { key: 'worlds', label: 'Worlds', icon: 'worlds', path: '/worlds' },
  { key: 'museum', label: 'Museum', icon: 'museum', path: '/museum' },
  { key: 'collection', label: 'Collection', icon: 'collection', path: '/collection' },
  { key: 'profile', label: 'Profile', icon: 'profile', path: '/profile' },
];

function resolveActiveKey(pathname: string): string {
  const match = TAB_ITEMS.find((item) => item.path === pathname);
  return match?.key ?? 'home';
}

export default function TabsLayout() {
  const pathname = usePathname();

  const handleSelect = useCallback((key: string) => {
    const item = TAB_ITEMS.find((tab) => tab.key === key);
    if (item) {
      router.replace(item.path as never);
    }
  }, []);

  return (
    <View style={styles.root}>
      <Slot />
      <View style={styles.tabBar}>
        <BottomNavigation items={TAB_ITEMS} activeKey={resolveActiveKey(pathname)} onSelect={handleSelect} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    bottom: spacing.sm,
  },
});
