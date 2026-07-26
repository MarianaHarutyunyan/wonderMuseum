export interface LeaderboardEntryConfig {
  readonly rank: number;
  readonly name: string;
  readonly score: number;
  readonly isPlayer?: boolean;
}

export interface AvatarOptionConfig {
  readonly id: string;
  readonly label: string;
}
