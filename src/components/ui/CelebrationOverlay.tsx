import type { PropsWithChildren, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { ZoomIn } from 'react-native-reanimated';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { SparkleBurst } from '@components/ui/SparkleBurst';
import { gradientAngles, spacing, type ButtonVariantToken, type GradientColors } from '@theme';

interface CelebrationOverlayProps extends PropsWithChildren {
  eyebrow: string;
  title: string;
  gradient: GradientColors;
  media?: ReactNode;
  ctaLabel: string;
  onPressCta: () => void;
  ctaVariant?: ButtonVariantToken;
}

/** Full-bleed gradient celebration screen — Correct/Level Complete/New Exhibit/Reward all build on this. */
export function CelebrationOverlay({
  eyebrow,
  title,
  gradient,
  media,
  children,
  ctaLabel,
  onPressCta,
  ctaVariant = 'primary',
}: CelebrationOverlayProps) {
  return (
    <LinearGradient colors={gradient} start={gradientAngles.diagonal.start} end={gradientAngles.diagonal.end} style={styles.root}>
      <View style={styles.content}>
        <AppText variant="small" weight="extraBold" align="center" color="rgba(255,255,255,0.85)">
          {eyebrow}
        </AppText>
        {media ? (
          <Animated.View entering={ZoomIn.duration(320)} style={[styles.media, styles.mediaStage]}>
            <SparkleBurst size={180} />
            <View style={styles.mediaForeground}>{media}</View>
          </Animated.View>
        ) : null}
        <AppText variant="titleXl" weight="extraBold" align="center" color="#FFFFFF">
          {title}
        </AppText>
        <View style={styles.body}>{children}</View>
      </View>
      <View style={styles.cta}>
        <AppButton label={ctaLabel} onPress={onPressCta} variant={ctaVariant} size="lg" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  media: {
    marginBottom: spacing.sm,
  },
  mediaStage: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaForeground: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  cta: {
    width: '100%',
  },
});
