import type { AvatarOptionConfig, LeaderboardEntryConfig } from '@/types/social.types';

export const AVATAR_OPTIONS: readonly AvatarOptionConfig[] = [
  { id: 'explorer', label: 'Explorer' },
  { id: 'ranger', label: 'Ranger' },
  { id: 'scientist', label: 'Scientist' },
  { id: 'diver', label: 'Diver' },
] as const;

/** Static mock leaderboard — no backend yet, per PROJECT.md. */
export const LEADERBOARD_ENTRIES: readonly LeaderboardEntryConfig[] = [
  { rank: 1, name: 'Maya', score: 28450 },
  { rank: 2, name: 'Leo', score: 26120 },
  { rank: 3, name: 'Aria', score: 25010 },
  { rank: 4, name: 'Explorer Alex', score: 24580, isPlayer: true },
  { rank: 5, name: 'Noah', score: 21870 },
  { rank: 6, name: 'Zoe', score: 19340 },
  { rank: 7, name: 'Kai', score: 17650 },
] as const;
