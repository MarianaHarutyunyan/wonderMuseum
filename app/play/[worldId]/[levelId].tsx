import { StyleSheet, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { CelebrationOverlay } from '@components/ui/CelebrationOverlay';
import { Coin } from '@components/game/Coin';
import { Icon } from '@components/ui/Icon';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { Star } from '@components/game/Star';
import { QuestionCard } from '@features/gameplay/components/QuestionCard';
import { COINS_PER_CORRECT_ANSWER, STARS_PER_CORRECT_ANSWER, usePlaySession } from '@features/gameplay/hooks/usePlaySession';
import { gradients, spacing } from '@theme';

export default function PlayScreen() {
  const { worldId, levelId } = useLocalSearchParams<{ worldId: string; levelId: string }>();
  const session = usePlaySession(worldId, levelId);

  if (!session.world || !session.level || !session.currentQuestion) {
    return (
      <ScreenContainer>
        <AppText size="md">Level not found.</AppText>
        <AppButton label="Go back" onPress={router.back} />
      </ScreenContainer>
    );
  }

  if (session.stage === 'question') {
    return (
      <ScreenContainer>
        <Header title={session.level.title} onBack={router.back} />
        <View style={styles.content}>
          <QuestionCard
            question={session.currentQuestion}
            questionNumber={session.questionIndex + 1}
            totalQuestions={session.totalQuestions}
            lives={session.lives}
            selectedIndex={session.selectedIndex}
            onSelectOption={session.selectOption}
            onContinue={session.continueFlow}
          />
        </View>
      </ScreenContainer>
    );
  }

  if (session.stage === 'reward') {
    return (
      <CelebrationOverlay
        eyebrow="CORRECT!"
        title="Great job!"
        gradient={gradients.green}
        media={<Star size={72} />}
        ctaLabel="Continue"
        onPressCta={session.continueFlow}
      >
        <View style={styles.rewardRow}>
          <View style={styles.rewardStat}>
            <Star size={20} />
            <AppText size="lg" weight="extraBold" color="#FFFFFF">
              +{STARS_PER_CORRECT_ANSWER}
            </AppText>
          </View>
          <View style={styles.rewardStat}>
            <Coin size={20} />
            <AppText size="lg" weight="extraBold" color="#FFFFFF">
              +{COINS_PER_CORRECT_ANSWER}
            </AppText>
          </View>
        </View>
      </CelebrationOverlay>
    );
  }

  if (session.stage === 'levelComplete' && session.result) {
    return (
      <CelebrationOverlay
        eyebrow="LEVEL COMPLETE!"
        title="Wonderful!"
        gradient={gradients.orange}
        media={
          <View style={styles.starsRow}>
            {[0, 1, 2].map((index) => (
              <Star key={index} size={40} filled={index < session.result!.starsEarned} />
            ))}
          </View>
        }
        ctaLabel={session.newlyUnlockedExhibit ? 'Continue' : 'Back to Levels'}
        ctaVariant="primary"
        onPressCta={session.continueFlow}
      >
        <View style={styles.statRow}>
          <AppText size="sm" color="rgba(255,255,255,0.85)">
            Correct Answers
          </AppText>
          <AppText size="md" weight="extraBold" color="#FFFFFF">
            {session.result.correctAnswers}/{session.result.totalQuestions}
          </AppText>
        </View>
        <View style={styles.statRow}>
          <AppText size="sm" color="rgba(255,255,255,0.85)">
            Coins Earned
          </AppText>
          <AppText size="md" weight="extraBold" color="#FFFFFF">
            {session.result.coinsEarned}
          </AppText>
        </View>
      </CelebrationOverlay>
    );
  }

  if (session.stage === 'newExhibit' && session.newlyUnlockedExhibit) {
    return (
      <CelebrationOverlay
        eyebrow="NEW EXHIBIT!"
        title={session.newlyUnlockedExhibit.title}
        gradient={gradients.purple}
        media={<Icon token="museum" size={72} color="#FFFFFF" />}
        ctaLabel="View in Museum"
        ctaVariant="primary"
        onPressCta={session.continueFlow}
      >
        <AppText size="sm" align="center" color="rgba(255,255,255,0.85)">
          {session.newlyUnlockedExhibit.description}
        </AppText>
      </CelebrationOverlay>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: spacing.sm,
  },
  rewardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.xl,
  },
  rewardStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  starsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
