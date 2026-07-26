import { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { Icon } from '@components/ui/Icon';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { WorldListItem } from '@features/worlds/components/WorldListItem';
import { UPCOMING_WORLDS, WORLDS } from '@content/worlds';
import { ROUTES } from '@navigation';
import { TAB_BAR_CLEARANCE } from '@constants';
import { spacing, type EmojiToken } from '@theme';

export default function WorldMapScreen() {
  const handleSelectWorld = useCallback((worldId: string) => {
    router.push(ROUTES.world(worldId));
  }, []);

  return (
    <ScreenContainer>
      <Header title="World Map" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          {WORLDS.map((world) => (
            <WorldListItem key={world.id} world={world} onPress={handleSelectWorld} />
          ))}
        </View>

        <AppText size="sm" weight="bold">
          Coming Soon
        </AppText>
        <View style={styles.list}>
          {UPCOMING_WORLDS.map((preview) => (
            <Card key={preview.title} variant="outlined">
              <View style={styles.upcomingRow}>
                <Icon token={preview.icon as EmojiToken} size={28} />
                <AppText size="md" weight="bold">
                  {preview.title}
                </AppText>
                <AppText size="xs" weight="semiBold">
                  Coming Soon
                </AppText>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: TAB_BAR_CLEARANCE,
    gap: spacing.sm,
  },
  list: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  upcomingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    opacity: 0.6,
  },
});
