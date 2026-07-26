import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';

import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { ROUTES } from '@navigation';
import { gradientAngles, gradients, spacing } from '@theme';

const SPLASH_DURATION_MS = 1400;

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace(ROUTES.loading), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={gradients.sky}
      start={gradientAngles.vertical.start}
      end={gradientAngles.vertical.end}
      style={styles.root}
    >
      <Animated.View entering={ZoomIn.duration(500)} style={styles.badge}>
        <Icon token="museum" size={72} />
      </Animated.View>
      <Animated.View entering={FadeIn.delay(200).duration(500)} style={styles.titleWrap}>
        <AppText variant="titleXl" weight="extraBold" align="center" color="#FFFFFF">
          Wonder <AppText variant="titleXl" weight="extraBold" color="#FFA640">Museum</AppText>
        </AppText>
        <AppText variant="body" align="center" color="rgba(255,255,255,0.85)">
          Learn • Explore • Collect
        </AppText>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrap: {
    gap: spacing.xxs,
  },
});
