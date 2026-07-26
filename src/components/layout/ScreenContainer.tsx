import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StarFieldBackground } from '@components/layout/StarFieldBackground';
import { gradientAngles, gradients, spacing } from '@theme';

interface ScreenContainerProps extends PropsWithChildren {
  edges?: readonly ('top' | 'bottom' | 'left' | 'right')[];
}

/** Every screen sits on the same dark navy→violet gradient with a slow-twinkling star layer underneath its content. */
export function ScreenContainer({ children, edges }: ScreenContainerProps) {
  return (
    <LinearGradient
      colors={gradients.navy}
      start={gradientAngles.vertical.start}
      end={gradientAngles.vertical.end}
      style={styles.safeArea}
    >
      <StarFieldBackground />
      <SafeAreaView style={styles.safeArea} edges={edges}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
});
