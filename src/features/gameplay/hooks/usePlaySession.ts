import { useCallback, useMemo, useState } from 'react';
import { router } from 'expo-router';

import { getQuestionsByIds } from '@content/questions';
import { getWorldById } from '@features/worlds/utils/getWorldById';
import { useHaptics } from '@hooks/useHaptics';
import { ROUTES } from '@navigation';
import { useCurrencyStore } from '@store/currencyStore';
import { useMissionsStore } from '@store/missionsStore';
import { useProfileStore } from '@store/profileStore';
import { useProgressStore } from '@store/progressStore';
import type { GameplayStage, LevelResult } from '@/types/gameplay.types';
import type { ExhibitConfig } from '@/types/world.types';

const STARTING_LIVES = 3;
const XP_PER_CORRECT_ANSWER = 10;

export const STARS_PER_CORRECT_ANSWER = 5;
export const COINS_PER_CORRECT_ANSWER = 10;

function computeStarsEarned(correctAnswers: number, totalQuestions: number): number {
  if (totalQuestions === 0) {
    return 0;
  }
  const ratio = correctAnswers / totalQuestions;
  if (ratio >= 1) {
    return 3;
  }
  if (ratio >= 0.6) {
    return 2;
  }
  return ratio > 0 ? 1 : 0;
}

export function usePlaySession(worldId: string, levelId: string) {
  const world = useMemo(() => getWorldById(worldId), [worldId]);
  const level = useMemo(() => world?.levels.find((candidate) => candidate.id === levelId), [world, levelId]);
  const questions = useMemo(() => getQuestionsByIds(level?.questionIds ?? []), [level]);
  const exhibit = useMemo(
    () => world?.exhibits.find((candidate) => candidate.id === level?.unlocksExhibitId),
    [world, level],
  );

  const { trigger } = useHaptics();
  const recordLevelResult = useProgressStore((state) => state.recordLevelResult);
  const isExhibitUnlocked = useProgressStore((state) => state.isExhibitUnlocked);
  const addCoins = useCurrencyStore((state) => state.addCoins);
  const addXp = useProfileStore((state) => state.addXp);
  const incrementProgress = useMissionsStore((state) => state.incrementProgress);

  const [stage, setStage] = useState<GameplayStage>('question');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [result, setResult] = useState<LevelResult | null>(null);
  const [newlyUnlockedExhibit, setNewlyUnlockedExhibit] = useState<ExhibitConfig | null>(null);

  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;

  const selectOption = useCallback(
    (index: number) => {
      if (selectedIndex !== null || !currentQuestion) {
        return;
      }
      setSelectedIndex(index);
      const isCorrect = index === currentQuestion.correctIndex;
      if (isCorrect) {
        setCorrectCount((count) => count + 1);
        trigger('success');
      } else {
        setLives((count) => Math.max(0, count - 1));
        trigger('error');
      }
    },
    [selectedIndex, currentQuestion, trigger],
  );

  const finalizeLevel = useCallback(
    (finalCorrectCount: number) => {
      if (!level || !exhibit) {
        return;
      }
      const starsEarned = computeStarsEarned(finalCorrectCount, totalQuestions);
      const coinsEarned = Math.round((level.rewardCoins * starsEarned) / 3);
      const wasAlreadyUnlocked = isExhibitUnlocked(exhibit.id);

      recordLevelResult({
        levelId: level.id,
        exhibitId: exhibit.id,
        starsEarned,
        correctAnswers: finalCorrectCount,
        totalQuestions,
        collectibleType: exhibit.collectibleType,
      });
      addCoins(coinsEarned);
      addXp(finalCorrectCount * XP_PER_CORRECT_ANSWER);
      incrementProgress('answer-10-questions', totalQuestions);
      incrementProgress('play-3-levels', 1);
      if (!wasAlreadyUnlocked) {
        incrementProgress('collect-2-exhibits', 1);
        setNewlyUnlockedExhibit(exhibit);
      }

      setResult({ correctAnswers: finalCorrectCount, totalQuestions, starsEarned, coinsEarned });
      setStage('levelComplete');
    },
    [level, exhibit, totalQuestions, isExhibitUnlocked, recordLevelResult, addCoins, addXp, incrementProgress],
  );

  const continueFlow = useCallback(() => {
    if (!level) {
      return;
    }

    if (stage === 'question') {
      const isCorrect = selectedIndex !== null && currentQuestion && selectedIndex === currentQuestion.correctIndex;
      if (isCorrect) {
        setStage('reward');
        return;
      }
      const isLastQuestion = questionIndex === totalQuestions - 1;
      if (lives <= 0 || isLastQuestion) {
        finalizeLevel(correctCount);
        return;
      }
      setQuestionIndex((index) => index + 1);
      setSelectedIndex(null);
      return;
    }

    if (stage === 'reward') {
      const isLastQuestion = questionIndex === totalQuestions - 1;
      if (lives <= 0 || isLastQuestion) {
        finalizeLevel(correctCount);
        return;
      }
      setQuestionIndex((index) => index + 1);
      setSelectedIndex(null);
      setStage('question');
      return;
    }

    if (stage === 'levelComplete') {
      if (newlyUnlockedExhibit) {
        setStage('newExhibit');
        return;
      }
      router.replace(ROUTES.world(world?.id ?? ''));
      return;
    }

    if (stage === 'newExhibit') {
      router.replace(ROUTES.museum);
    }
  }, [
    stage,
    level,
    world,
    selectedIndex,
    currentQuestion,
    questionIndex,
    totalQuestions,
    lives,
    correctCount,
    finalizeLevel,
    newlyUnlockedExhibit,
  ]);

  return {
    world,
    level,
    exhibit,
    questions,
    totalQuestions,
    stage,
    questionIndex,
    currentQuestion,
    selectedIndex,
    lives,
    correctCount,
    result,
    newlyUnlockedExhibit,
    selectOption,
    continueFlow,
  };
}
