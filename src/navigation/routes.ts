export const ROUTES = {
  home: '/' as const,
  world: (worldId: string) => `/world/${worldId}` as const,
} as const;
