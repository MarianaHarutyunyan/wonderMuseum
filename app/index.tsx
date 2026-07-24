import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@/components/ui/AppText';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { CollectibleSummaryBar } from '@/features/collectibles/components/CollectibleSummaryBar';
import { WorldList } from '@/features/worlds/components/WorldList';
import { WORLDS } from '@/config/worlds.config';
import { spacing } from '@/theme';

export default function HomeScreen() {
  const handleSelectWorld = useCallback((worldId: string) => {
    router.push(`/world/${worldId}`);
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <AppText size="xxl" weight="extraBold">
          Wonder Museum
        </AppText>
        <AppText size="sm">Explore worlds and grow your museum!</AppText>
      </View>
      <CollectibleSummaryBar />
      <WorldList worlds={WORLDS} onSelectWorld={handleSelectWorld} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
});
