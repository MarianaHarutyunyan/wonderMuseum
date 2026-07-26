import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

import { AppText } from '@components/ui/AppText';
import { Icon } from '@components/ui/Icon';
import { ProgressBar } from '@components/ui/ProgressBar';
import { ROUTES } from '@navigation';
import { gradientAngles, gradients, spacing } from '@theme';

const LOADING_STEPS = ['Unpacking fossils…', 'Polishing artifacts…', 'Waking up dinosaurs…', 'Almost there…'];
const STEP_DURATION_MS = 450;

export default function LoadingScreen() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (stepIndex >= LOADING_STEPS.length) {
      router.replace(ROUTES.home);
      return;
    }
    const timer = setTimeout(() => setStepIndex((current) => current + 1), STEP_DURATION_MS);
    return () => clearTimeout(timer);
  }, [stepIndex]);

  const progress = Math.min(1, stepIndex / LOADING_STEPS.length);
  const message = LOADING_STEPS[Math.min(stepIndex, LOADING_STEPS.length - 1)] ?? LOADING_STEPS[0];

  return (
    <LinearGradient
      colors={gradients.purple}
      start={gradientAngles.diagonal.start}
      end={gradientAngles.diagonal.end}
      style={styles.root}
    >
      <Icon token="museum" size={56} />
      <View style={styles.progressWrap}>
        <ProgressBar progress={progress} gradient="orange" height={14} />
        <AppText variant="small" align="center" color="rgba(255,255,255,0.9)">
          {message}
        </AppText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  progressWrap: {
    width: '100%',
    gap: spacing.sm,
  },
});
