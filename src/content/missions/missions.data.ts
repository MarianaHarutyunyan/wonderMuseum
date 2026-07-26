import type { MissionConfig } from '@/types/missions.types';

export const MISSIONS: readonly MissionConfig[] = [
  { id: 'answer-10-questions', category: 'daily', title: 'Answer 10 questions', target: 10, rewardCoins: 20, icon: 'check' },
  { id: 'play-3-levels', category: 'daily', title: 'Play 3 levels', target: 3, rewardCoins: 30, icon: 'play' },
  { id: 'collect-2-exhibits', category: 'daily', title: 'Collect 2 new exhibits', target: 2, rewardCoins: 40, icon: 'museum' },
  { id: 'login-today', category: 'daily', title: 'Login to the game', target: 1, rewardCoins: 10, icon: 'flag' },

  { id: 'weekly-levels', category: 'weekly', title: 'Complete 10 levels', target: 10, rewardCoins: 150, icon: 'play' },
  { id: 'weekly-worlds', category: 'weekly', title: 'Visit all worlds', target: 3, rewardCoins: 120, icon: 'worlds' },
  { id: 'weekly-streak', category: 'weekly', title: 'Play 5 days in a row', target: 5, rewardCoins: 200, icon: 'fire' },

  { id: 'achievement-explorer', category: 'achievements', title: 'Unlock 5 exhibits', target: 5, rewardCoins: 100, icon: 'trophy' },
  { id: 'achievement-scholar', category: 'achievements', title: 'Answer 100 questions correctly', target: 100, rewardCoins: 250, icon: 'medal' },
  { id: 'achievement-collector', category: 'achievements', title: 'Earn 500 stars', target: 500, rewardCoins: 300, icon: 'star' },
] as const;
