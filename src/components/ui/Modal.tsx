import type { PropsWithChildren } from 'react';
import { Modal as RNModal, Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';

import { useThemeColors } from '@hooks/useThemeColors';
import { radius, shadows, spacing } from '@theme';

interface ModalProps extends PropsWithChildren {
  visible: boolean;
  onRequestClose: () => void;
  /** Tapping the backdrop closes the modal. Disable for blocking dialogs. */
  dismissOnBackdropPress?: boolean;
}

/** Centered modal sheet with a fading backdrop — the base every dialog builds on. */
export function Modal({ visible, onRequestClose, dismissOnBackdropPress = true, children }: ModalProps) {
  const colors = useThemeColors();

  return (
    <RNModal visible={visible} transparent animationType="none" onRequestClose={onRequestClose} statusBarTranslucent>
      <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(150)} style={styles.backdropWrap}>
        <Pressable
          style={[styles.backdrop, { backgroundColor: colors.overlay }]}
          onPress={dismissOnBackdropPress ? onRequestClose : undefined}
        />
        <Animated.View
          entering={ZoomIn.duration(220)}
          exiting={ZoomOut.duration(150)}
          style={[styles.sheet, shadows.xl, { backgroundColor: colors.surface, borderRadius: radius.card }]}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  backdropWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
  },
  sheet: {
    width: '85%',
    maxWidth: 400,
    padding: spacing.lg,
  },
});
