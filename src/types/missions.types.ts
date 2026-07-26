import type { EmojiToken } from '@theme';

export type MissionCategory = 'daily' | 'weekly' | 'achievements';

export interface MissionConfig {
  readonly id: string;
  readonly category: MissionCategory;
  readonly title: string;
  readonly target: number;
  readonly rewardCoins: number;
  readonly icon: EmojiToken;
}
