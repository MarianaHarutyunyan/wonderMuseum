import { useCallback, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { router } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { Dialog } from '@components/ui/Dialog';
import { Icon } from '@components/ui/Icon';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { useThemeColors } from '@hooks/useThemeColors';
import { useCurrencyStore } from '@store/currencyStore';
import { useProgressStore } from '@store/progressStore';
import { useSettingsStore } from '@store/settingsStore';
import { radius, spacing } from '@theme';

const PIN_LENGTH = 4;

export default function ParentModeScreen() {
  const colors = useThemeColors();
  const verifyParentPin = useSettingsStore((state) => state.verifyParentPin);
  const resetProgress = useProgressStore((state) => state.resetProgress);
  const refillEnergy = useCurrencyStore((state) => state.refillEnergy);

  const [pin, setPin] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [resetDialogVisible, setResetDialogVisible] = useState(false);

  const handleSubmitPin = useCallback(() => {
    if (verifyParentPin(pin)) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }, [pin, verifyParentPin]);

  if (!unlocked) {
    return (
      <ScreenContainer>
        <Header title="Parent Mode" onBack={router.back} />
        <View style={styles.pinWrap}>
          <Icon token="parent" size={48} />
          <AppText variant="subtitle" weight="bold" align="center">
            Enter Parent PIN
          </AppText>
          <AppText size="sm" align="center" color={colors.textSecondary}>
            Grown-ups only — default PIN is 1234.
          </AppText>
          <TextInput
            value={pin}
            onChangeText={(value) => setPin(value.replace(/[^0-9]/g, '').slice(0, PIN_LENGTH))}
            keyboardType="number-pad"
            secureTextEntry
            maxLength={PIN_LENGTH}
            style={[styles.pinInput, { borderColor: error ? colors.error : colors.border, color: colors.textPrimary }]}
            placeholder="••••"
            placeholderTextColor={colors.textMuted}
          />
          {error ? (
            <AppText size="xs" color={colors.error}>
              Incorrect PIN, try again.
            </AppText>
          ) : null}
          <AppButton label="Unlock" onPress={handleSubmitPin} disabled={pin.length !== PIN_LENGTH} />
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Header title="Parent Mode" onBack={router.back} />
      <View style={styles.content}>
        <Card onPress={refillEnergy}>
          <View style={styles.row}>
            <AppText size="md" weight="bold">
              Refill Energy
            </AppText>
            <Icon token="energy" size={22} />
          </View>
        </Card>
        <Card onPress={() => setResetDialogVisible(true)}>
          <View style={styles.row}>
            <AppText size="md" weight="bold" color={colors.error}>
              Reset Game Progress
            </AppText>
            <Icon token="close" size={20} />
          </View>
        </Card>
      </View>

      <Dialog
        visible={resetDialogVisible}
        title="Reset progress?"
        message="This clears every level, star, and exhibit. This can't be undone."
        onRequestClose={() => setResetDialogVisible(false)}
        actions={[
          { label: 'Cancel', variant: 'ghost', onPress: () => setResetDialogVisible(false) },
          {
            label: 'Reset',
            variant: 'danger',
            onPress: () => {
              resetProgress();
              setResetDialogVisible(false);
            },
          },
        ]}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  pinWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  pinInput: {
    width: 160,
    textAlign: 'center',
    fontSize: 28,
    letterSpacing: 12,
    borderWidth: 2,
    borderRadius: radius.input,
    paddingVertical: spacing.sm,
  },
  content: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
