import { StyleSheet, View } from 'react-native';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Modal } from '@components/ui/Modal';
import { spacing, type ButtonVariantToken } from '@theme';

interface DialogAction {
  label: string;
  onPress: () => void;
  variant?: ButtonVariantToken;
}

interface DialogProps {
  visible: boolean;
  title: string;
  message?: string;
  actions: readonly DialogAction[];
  onRequestClose: () => void;
}

/** Alert-style dialog — title, message, and one or more action buttons. */
export function Dialog({ visible, title, message, actions, onRequestClose }: DialogProps) {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose} dismissOnBackdropPress={false}>
      <View style={styles.content}>
        <AppText variant="subtitle" weight="extraBold" align="center">
          {title}
        </AppText>
        {message ? (
          <AppText variant="body" align="center">
            {message}
          </AppText>
        ) : null}
        <View style={styles.actions}>
          {actions.map((action) => (
            <AppButton key={action.label} label={action.label} onPress={action.onPress} variant={action.variant} />
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
  },
  actions: {
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
});
