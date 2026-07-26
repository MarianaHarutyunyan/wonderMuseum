import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';

interface Particle {
  key: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

const PARTICLE_COUNT = 18;

function Twinkle({ particle }: { particle: Particle }) {
  const opacity = useSharedValue(0.15);

  opacity.value = withDelay(
    particle.delay,
    withRepeat(withTiming(0.7, { duration: particle.duration }), -1, true),
  );

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View
      style={[
        styles.particle,
        animatedStyle,
        { left: particle.left, top: particle.top, width: particle.size, height: particle.size },
      ]}
    />
  );
}

/** Subtle, slowly-twinkling star/particle layer for dark screen backgrounds. Purely decorative — no pointer events. */
export function StarFieldBackground() {
  const { width, height } = useWindowDimensions();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: PARTICLE_COUNT }).map((_, index) => ({
        key: index,
        left: Math.random() * width,
        top: Math.random() * height,
        size: 1.5 + Math.random() * 2,
        delay: Math.random() * 2000,
        duration: 2200 + Math.random() * 2200,
      })),
    [width, height],
  );

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {particles.map((particle) => (
        <Twinkle key={particle.key} particle={particle} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  particle: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
  },
});
