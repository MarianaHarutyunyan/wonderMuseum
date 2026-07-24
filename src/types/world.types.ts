export type MiniGameType = 'quiz' | 'matching' | 'puzzle' | 'sorting';

export interface MiniGameConfig {
  readonly id: string;
  readonly title: string;
  readonly type: MiniGameType;
  readonly description: string;
  readonly unlocksExhibitId: string;
}

export interface ExhibitConfig {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly thumbnail: string;
}

export interface WorldConfig {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly colorToken: string;
  readonly icon: string;
  readonly miniGames: readonly MiniGameConfig[];
  readonly exhibits: readonly ExhibitConfig[];
}
