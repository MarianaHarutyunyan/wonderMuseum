import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { Icon } from '@components/ui/Icon';
import { ToggleSwitch } from '@components/ui/ToggleSwitch';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { APP_CONFIG } from '@config';
import { ROUTES } from '@navigation';
import { useSettingsStore } from '@store/settingsStore';
import { spacing } from '@theme';

interface SettingRowConfig {
  key: 'soundEnabled' | 'hapticsEnabled' | 'musicEnabled';
  label: string;
  icon: 'sound' | 'haptics' | 'settings';
}

const TOGGLE_ROWS: readonly SettingRowConfig[] = [
  { key: 'soundEnabled', label: 'Sound Effects', icon: 'sound' },
  { key: 'musicEnabled', label: 'Music', icon: 'settings' },
  { key: 'hapticsEnabled', label: 'Haptics', icon: 'haptics' },
];

export default function SettingsScreen() {
  const settings = useSettingsStore();
  const toggleMap = {
    soundEnabled: settings.toggleSound,
    hapticsEnabled: settings.toggleHaptics,
    musicEnabled: settings.toggleMusic,
  } as const;

  return (
    <ScreenContainer>
      <Header title="Settings" onBack={router.back} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          {TOGGLE_ROWS.map((row) => (
            <Card key={row.key}>
              <View style={styles.row}>
                <View style={styles.rowLabel}>
                  <Icon token={row.icon} size={22} />
                  <AppText size="md" weight="bold">
                    {row.label}
                  </AppText>
                </View>
                <ToggleSwitch value={settings[row.key]} onChange={toggleMap[row.key]} accessibilityLabel={row.label} />
              </View>
            </Card>
          ))}
        </View>

        <Card onPress={() => router.push(ROUTES.parentMode)}>
          <View style={styles.row}>
            <View style={styles.rowLabel}>
              <Icon token="parent" size={22} />
              <AppText size="md" weight="bold">
                Parent Mode
              </AppText>
            </View>
            <Icon token="forward" size={22} />
          </View>
        </Card>

        <AppText size="xs" align="center">
          {APP_CONFIG.name} · v1.0.0
        </AppText>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  section: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
});
