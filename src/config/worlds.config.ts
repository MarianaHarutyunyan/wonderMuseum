import type { WorldConfig } from '@/types/world.types';

export const WORLDS: readonly WorldConfig[] = [
  {
    id: 'dinosaur-world',
    title: 'Dinosaur World',
    description: 'Dig up fossils and learn about prehistoric creatures.',
    colorToken: 'accentFossil',
    icon: 'dinosaur',
    miniGames: [
      {
        id: 'dinosaur-quiz',
        title: 'Dino Quiz',
        type: 'quiz',
        description: 'Answer questions about dinosaurs.',
        unlocksExhibitId: 'trex-skeleton',
      },
    ],
    exhibits: [
      {
        id: 'trex-skeleton',
        title: 'T-Rex Skeleton',
        description: 'The mighty Tyrannosaurus Rex.',
        thumbnail: 'trex-skeleton',
      },
    ],
  },
  {
    id: 'space-world',
    title: 'Space World',
    description: 'Explore planets, stars, and galaxies.',
    colorToken: 'accentArtifact',
    icon: 'planet',
    miniGames: [
      {
        id: 'planet-matching',
        title: 'Planet Matching',
        type: 'matching',
        description: 'Match planets to their names.',
        unlocksExhibitId: 'solar-system-model',
      },
    ],
    exhibits: [
      {
        id: 'solar-system-model',
        title: 'Solar System Model',
        description: 'A scale model of our solar system.',
        thumbnail: 'solar-system-model',
      },
    ],
  },
  {
    id: 'ocean-world',
    title: 'Ocean World',
    description: 'Meet creatures from the deep sea.',
    colorToken: 'accentCreature',
    icon: 'wave',
    miniGames: [
      {
        id: 'ocean-sorting',
        title: 'Ocean Sorting',
        type: 'sorting',
        description: 'Sort ocean creatures by habitat.',
        unlocksExhibitId: 'coral-reef-tank',
      },
    ],
    exhibits: [
      {
        id: 'coral-reef-tank',
        title: 'Coral Reef Tank',
        description: 'A living coral reef display.',
        thumbnail: 'coral-reef-tank',
      },
    ],
  },
] as const;
