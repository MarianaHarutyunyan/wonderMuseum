import { WORLDS } from '@/config/worlds.config';
import type { WorldConfig } from '@/types/world.types';

export function getWorldById(worldId: string): WorldConfig | undefined {
  return WORLDS.find((world) => world.id === worldId);
}
