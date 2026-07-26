import type { CollectibleType } from './collectibles.types';
import type { WorldThemeToken } from '@theme';

export interface LevelConfig {
  readonly id: string;
  readonly index: number;
  readonly title: string;
  readonly questionIds: readonly string[];
  readonly unlocksExhibitId: string;
  readonly rewardCoins: number;
}

export interface ExhibitConfig {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly collectibleType: CollectibleType;
}

export interface WorldConfig {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly colorToken: string;
  readonly icon: string;
  readonly themeToken: WorldThemeToken;
  readonly levels: readonly LevelConfig[];
  readonly exhibits: readonly ExhibitConfig[];
}
