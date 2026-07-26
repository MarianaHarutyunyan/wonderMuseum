import type { WorldConfig } from '@/types/world.types';

export const WORLDS: readonly WorldConfig[] = [
  {
    id: 'dinosaur-world',
    title: 'Dinosaurs',
    description: 'Dig up fossils and learn about prehistoric creatures.',
    colorToken: 'accentFossil',
    icon: 'dinosaur',
    themeToken: 'dinosaur',
    levels: [
      { id: 'dinosaur-l1', index: 1, title: 'Meet the Dinosaurs', questionIds: ['dinosaur-q1', 'dinosaur-q2'], unlocksExhibitId: 'trex-skeleton', rewardCoins: 60 },
      { id: 'dinosaur-l2', index: 2, title: 'Fossil Hunters', questionIds: ['dinosaur-q3', 'dinosaur-q4'], unlocksExhibitId: 'triceratops-skull', rewardCoins: 70 },
      { id: 'dinosaur-l3', index: 3, title: 'Sky and Sea Giants', questionIds: ['dinosaur-q5', 'dinosaur-q6'], unlocksExhibitId: 'pterodactyl-fossil', rewardCoins: 80 },
      { id: 'dinosaur-l4', index: 4, title: 'Ice Age Wonders', questionIds: ['dinosaur-q1', 'dinosaur-q3', 'dinosaur-q5'], unlocksExhibitId: 'woolly-mammoth', rewardCoins: 90 },
      { id: 'dinosaur-l5', index: 5, title: 'Dino Champion', questionIds: ['dinosaur-q2', 'dinosaur-q4', 'dinosaur-q6'], unlocksExhibitId: 'woolly-mammoth', rewardCoins: 100 },
    ],
    exhibits: [
      { id: 'trex-skeleton', title: 'T-Rex Skeleton', description: 'The mighty Tyrannosaurus Rex.', thumbnail: 'trex-skeleton', collectibleType: 'fossil' },
      { id: 'triceratops-skull', title: 'Triceratops Skull', description: 'Three horns and a bony frill.', thumbnail: 'triceratops-skull', collectibleType: 'fossil' },
      { id: 'pterodactyl-fossil', title: 'Pterodactyl', description: 'A flying reptile from the sky.', thumbnail: 'pterodactyl-fossil', collectibleType: 'fossil' },
      { id: 'woolly-mammoth', title: 'Woolly Mammoth', description: 'An Ice Age giant covered in fur.', thumbnail: 'woolly-mammoth', collectibleType: 'fossil' },
    ],
  },
  {
    id: 'space-world',
    title: 'Space',
    description: 'Explore planets, stars, and galaxies.',
    colorToken: 'accentArtifact',
    icon: 'planet',
    themeToken: 'space',
    levels: [
      { id: 'space-l1', index: 1, title: 'Our Solar System', questionIds: ['space-q1', 'space-q2'], unlocksExhibitId: 'solar-system-model', rewardCoins: 60 },
      { id: 'space-l2', index: 2, title: 'Rockets and Ships', questionIds: ['space-q3', 'space-q4'], unlocksExhibitId: 'spaceship-model', rewardCoins: 70 },
      { id: 'space-l3', index: 3, title: 'Stars and Galaxies', questionIds: ['space-q5', 'space-q6'], unlocksExhibitId: 'meteor-fragment', rewardCoins: 80 },
      { id: 'space-l4', index: 4, title: 'Moon Explorers', questionIds: ['space-q1', 'space-q3', 'space-q5'], unlocksExhibitId: 'moon-rock', rewardCoins: 90 },
      { id: 'space-l5', index: 5, title: 'Space Champion', questionIds: ['space-q2', 'space-q4', 'space-q6'], unlocksExhibitId: 'moon-rock', rewardCoins: 100 },
    ],
    exhibits: [
      { id: 'solar-system-model', title: 'Solar System Model', description: 'A scale model of our solar system.', thumbnail: 'solar-system-model', collectibleType: 'artifact' },
      { id: 'spaceship-model', title: 'Spaceship', description: 'A model rocket ready for launch.', thumbnail: 'spaceship-model', collectibleType: 'artifact' },
      { id: 'meteor-fragment', title: 'Meteor Fragment', description: 'A piece of rock from outer space.', thumbnail: 'meteor-fragment', collectibleType: 'artifact' },
      { id: 'moon-rock', title: 'Moon Rock', description: 'Brought back from the lunar surface.', thumbnail: 'moon-rock', collectibleType: 'artifact' },
    ],
  },
  {
    id: 'ocean-world',
    title: 'Ocean',
    description: 'Meet creatures from the deep sea.',
    colorToken: 'accentCreature',
    icon: 'wave',
    themeToken: 'ocean',
    levels: [
      { id: 'ocean-l1', index: 1, title: 'Coral Reef Life', questionIds: ['ocean-q1', 'ocean-q2'], unlocksExhibitId: 'coral-reef-tank', rewardCoins: 60 },
      { id: 'ocean-l2', index: 2, title: 'Deep Sea Giants', questionIds: ['ocean-q3', 'ocean-q4'], unlocksExhibitId: 'giant-squid-model', rewardCoins: 70 },
      { id: 'ocean-l3', index: 3, title: 'Sharks and Fins', questionIds: ['ocean-q5', 'ocean-q6'], unlocksExhibitId: 'shark-jaw', rewardCoins: 80 },
      { id: 'ocean-l4', index: 4, title: 'Shells and Shores', questionIds: ['ocean-q1', 'ocean-q3', 'ocean-q5'], unlocksExhibitId: 'sea-turtle-shell', rewardCoins: 90 },
      { id: 'ocean-l5', index: 5, title: 'Ocean Champion', questionIds: ['ocean-q2', 'ocean-q4', 'ocean-q6'], unlocksExhibitId: 'sea-turtle-shell', rewardCoins: 100 },
    ],
    exhibits: [
      { id: 'coral-reef-tank', title: 'Coral Reef Tank', description: 'A living coral reef display.', thumbnail: 'coral-reef-tank', collectibleType: 'creature' },
      { id: 'giant-squid-model', title: 'Giant Squid', description: 'A mysterious deep-sea giant.', thumbnail: 'giant-squid-model', collectibleType: 'creature' },
      { id: 'shark-jaw', title: 'Shark Jaw', description: 'Rows of razor-sharp teeth.', thumbnail: 'shark-jaw', collectibleType: 'creature' },
      { id: 'sea-turtle-shell', title: 'Sea Turtle Shell', description: 'A gentle traveler of the seas.', thumbnail: 'sea-turtle-shell', collectibleType: 'creature' },
    ],
  },
] as const;

export interface WorldPreviewConfig {
  readonly title: string;
  readonly icon: string;
}

/** Teaser entries for worlds not yet playable — shown at the bottom of the World Map. */
export const UPCOMING_WORLDS: readonly WorldPreviewConfig[] = [
  { title: 'Ancient Egypt', icon: 'egypt' },
] as const;
