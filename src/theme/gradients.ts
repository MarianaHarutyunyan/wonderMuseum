export type GradientColors = readonly [string, string];

export const gradients: Record<
  'blue' | 'purple' | 'orange' | 'pink' | 'green' | 'gold' | 'navy' | 'sky',
  GradientColors
> = {
  sky: ['#6D8BFF', '#00D4FF'],
  blue: ['#6D8BFF', '#00D4FF'],
  purple: ['#A066FF', '#6D8BFF'],
  orange: ['#FF8A00', '#FFC93A'],
  pink: ['#FF5D88', '#FF8EE8'],
  green: ['#39D98A', '#7CF0B2'],
  gold: ['#FFC93A', '#FF8A00'],
  navy: ['#101238', '#1A1F4D'],
};

export type GradientToken = keyof typeof gradients;

/** Start/end points for `expo-linear-gradient`, keyed by direction. */
export const gradientAngles = {
  vertical: { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
  horizontal: { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } },
  diagonal: { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
} as const;

export type GradientAngleToken = keyof typeof gradientAngles;
