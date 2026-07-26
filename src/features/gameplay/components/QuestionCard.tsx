import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { Icon } from '@components/ui/Icon';
import { OptionButton, type OptionState } from '@components/ui/OptionButton';
import { ProgressBar } from '@components/ui/ProgressBar';
import { spacing } from '@theme';
import type { QuestionConfig } from '@/types/gameplay.types';

interface QuestionCardProps {
  question: QuestionConfig;
  questionNumber: number;
  totalQuestions: number;
  lives: number;
  selectedIndex: number | null;
  onSelectOption: (index: number) => void;
  onContinue: () => void;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  lives,
  selectedIndex,
  onSelectOption,
  onContinue,
}: QuestionCardProps) {
  const hasAnswered = selectedIndex !== null;

  const optionStates = useMemo<OptionState[]>(
    () =>
      question.options.map((_, index) => {
        if (!hasAnswered) {
          return 'default';
        }
        if (index === question.correctIndex) {
          return 'correct';
        }
        if (index === selectedIndex) {
          return 'incorrect';
        }
        return 'default';
      }),
    [question, hasAnswered, selectedIndex],
  );

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <AppText size="sm" weight="bold">
          {questionNumber}/{totalQuestions}
        </AppText>
        <View style={styles.lives}>
          {Array.from({ length: lives }).map((_, index) => (
            <Icon key={index} token="heart" size={18} />
          ))}
        </View>
      </View>
      <ProgressBar progress={questionNumber / totalQuestions} gradient="blue" height={8} />

      <Card>
        <AppText variant="subtitle" weight="bold" align="center">
          {question.prompt}
        </AppText>
      </Card>

      <View style={styles.options}>
        {question.options.map((option, index) => (
          <OptionButton
            key={option}
            label={option}
            state={optionStates[index]}
            disabled={hasAnswered}
            onPress={() => onSelectOption(index)}
          />
        ))}
      </View>

      {hasAnswered ? <AppButton label="Continue" onPress={onContinue} variant="primary" size="lg" /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lives: {
    flexDirection: 'row',
    gap: spacing.xxs,
  },
  options: {
    gap: spacing.sm,
  },
});
