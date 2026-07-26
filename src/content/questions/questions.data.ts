import type { QuestionConfig } from '@/types/gameplay.types';

export const QUESTIONS: Record<string, QuestionConfig> = {
  'dinosaur-q1': {
    id: 'dinosaur-q1',
    prompt: 'Which dinosaur had three horns on its face?',
    options: ['T-Rex', 'Triceratops', 'Velociraptor', 'Stegosaurus'],
    correctIndex: 1,
  },
  'dinosaur-q2': {
    id: 'dinosaur-q2',
    prompt: 'Which dinosaur is famous for its huge, sharp teeth?',
    options: ['Brachiosaurus', 'Triceratops', 'Tyrannosaurus Rex', 'Pterodactyl'],
    correctIndex: 2,
  },
  'dinosaur-q3': {
    id: 'dinosaur-q3',
    prompt: 'What do we call a scientist who studies dinosaur fossils?',
    options: ['Biologist', 'Paleontologist', 'Astronomer', 'Geologist'],
    correctIndex: 1,
  },
  'dinosaur-q4': {
    id: 'dinosaur-q4',
    prompt: 'Which dinosaur had sharp plates along its back?',
    options: ['Stegosaurus', 'Diplodocus', 'Velociraptor', 'Ankylosaurus'],
    correctIndex: 0,
  },
  'dinosaur-q5': {
    id: 'dinosaur-q5',
    prompt: 'Which period came right before the dinosaurs went extinct?',
    options: ['Jurassic', 'Triassic', 'Cretaceous', 'Cambrian'],
    correctIndex: 2,
  },
  'dinosaur-q6': {
    id: 'dinosaur-q6',
    prompt: 'What did most long-necked dinosaurs like Brachiosaurus eat?',
    options: ['Meat', 'Fish', 'Plants', 'Insects'],
    correctIndex: 2,
  },
  'space-q1': {
    id: 'space-q1',
    prompt: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctIndex: 1,
  },
  'space-q2': {
    id: 'space-q2',
    prompt: 'Which is the largest planet in our solar system?',
    options: ['Earth', 'Neptune', 'Jupiter', 'Uranus'],
    correctIndex: 2,
  },
  'space-q3': {
    id: 'space-q3',
    prompt: 'What is the closest star to Earth?',
    options: ['Polaris', 'The Sun', 'Sirius', 'Proxima Centauri'],
    correctIndex: 1,
  },
  'space-q4': {
    id: 'space-q4',
    prompt: 'Which planet has the famous rings made of ice and rock?',
    options: ['Mars', 'Mercury', 'Saturn', 'Earth'],
    correctIndex: 2,
  },
  'space-q5': {
    id: 'space-q5',
    prompt: 'What do we call a large group of stars, gas, and dust?',
    options: ['A galaxy', 'A comet', 'A meteor', 'A nebula'],
    correctIndex: 0,
  },
  'space-q6': {
    id: 'space-q6',
    prompt: 'How many planets are in our solar system?',
    options: ['7', '8', '9', '10'],
    correctIndex: 1,
  },
  'ocean-q1': {
    id: 'ocean-q1',
    prompt: 'What is the largest animal in the ocean?',
    options: ['Great white shark', 'Blue whale', 'Giant squid', 'Orca'],
    correctIndex: 1,
  },
  'ocean-q2': {
    id: 'ocean-q2',
    prompt: 'Which sea creature has eight arms?',
    options: ['Jellyfish', 'Octopus', 'Starfish', 'Seahorse'],
    correctIndex: 1,
  },
  'ocean-q3': {
    id: 'ocean-q3',
    prompt: 'What do coral reefs need to grow?',
    options: ['Cold, dark water', 'Warm, shallow water', 'Deep, salty water', 'Fresh water'],
    correctIndex: 1,
  },
  'ocean-q4': {
    id: 'ocean-q4',
    prompt: 'Which of these is a mammal that lives in the ocean?',
    options: ['Tuna', 'Dolphin', 'Jellyfish', 'Crab'],
    correctIndex: 1,
  },
  'ocean-q5': {
    id: 'ocean-q5',
    prompt: 'What do clownfish live safely inside?',
    options: ['Seaweed', 'Sand', 'Sea anemones', 'Shipwrecks'],
    correctIndex: 2,
  },
  'ocean-q6': {
    id: 'ocean-q6',
    prompt: 'Which ocean zone gets no sunlight at all?',
    options: ['Sunlight zone', 'Twilight zone', 'Midnight zone', 'Shoreline'],
    correctIndex: 2,
  },
} as const;

export function getQuestionsByIds(ids: readonly string[]): QuestionConfig[] {
  return ids.map((id) => QUESTIONS[id]).filter((question): question is QuestionConfig => question !== undefined);
}
