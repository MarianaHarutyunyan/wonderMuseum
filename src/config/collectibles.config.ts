import type { CollectibleType } from '@/types/collectibles.types';

interface CollectibleTypeConfig {
  readonly id: CollectibleType;
  readonly label: string;
  readonly icon: string;
  readonly colorToken: string;
}

export const COLLECTIBLE_TYPES: readonly CollectibleTypeConfig[] = [
  { id: 'star', label: 'Stars', icon: 'star', colorToken: 'accentGold' },
  { id: 'coin', label: 'Coins', icon: 'coin', colorToken: 'accentCoin' },
  { id: 'fossil', label: 'Fossils', icon: 'fossil', colorToken: 'accentFossil' },
  { id: 'artifact', label: 'Artifacts', icon: 'artifact', colorToken: 'accentArtifact' },
  { id: 'creature', label: 'Creatures', icon: 'creature', colorToken: 'accentCreature' },
] as const;
