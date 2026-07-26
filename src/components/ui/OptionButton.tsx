import { StyleSheet, View } from 'react-native';

import { AnimatedButton } from '@components/ui/AnimatedButton';
import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius, spacing } from '@theme';

export type OptionState = 'default' | 'correct' | 'incorrect';

interface OptionButtonProps {
  label: string;
  state?: OptionState;
  disabled?: boolean;
  onPress: () => void;
}

/** Quiz-answer button — flat surface that recolors to green/red once a state is set. */
export function OptionButton({ label, state = 'default', disabled = false, onPress }: OptionButtonProps) {
  const colors = useThemeColors();
  const tone = {
    default: { background: colors.surface, border: colors.border, text: colors.textPrimary },
    correct: { background: colors.success, border: colors.success, text: colors.white },
    incorrect: { background: colors.error, border: colors.error, text: colors.white },
  }[state];

  return (
    <AnimatedButton onPress={onPress} disabled={disabled} pressScale={0.97} accessibilityLabel={label}>
      <View
        style={[
          styles.option,
          { backgroundColor: tone.background, borderColor: tone.border, borderRadius: radius.input },
        ]}
      >
        <AppText variant="small" weight="bold" color={tone.text}>
          {label}
        </AppText>
        {state === 'correct' ? <Icon token="check" size={18} /> : null}
        {state === 'incorrect' ? <Icon token="close" size={16} /> : null}
      </View>
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});
