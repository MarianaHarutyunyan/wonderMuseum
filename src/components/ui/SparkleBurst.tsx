import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import sparkleBurstSource from '@assets/lottie/sparkle-burst.json';

interface SparkleBurstProps {
  size?: number;
}

/** One-shot decorative sparkle burst — sits behind celebration media (reward/level-complete/new-exhibit). */
export function SparkleBurst({ size = 220 }: SparkleBurstProps) {
  return (
    <LottieView
      source={sparkleBurstSource}
      autoPlay
      loop
      style={[styles.lottie, { width: size, height: size }]}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
  },
});
