export type GradientColors = readonly [string, string];

export const gradients: Record<'blue' | 'purple' | 'orange' | 'pink' | 'green', GradientColors> = {
  blue: ['#4F8CFF', '#6ED8FF'],
  purple: ['#8A6DFF', '#B57DFF'],
  orange: ['#FF9B4A', '#FFD54A'],
  pink: ['#FF71C8', '#FF9FE3'],
  green: ['#5EDB7E', '#9BF3A3'],
};

export type GradientToken = keyof typeof gradients;

/** Start/end points for `expo-linear-gradient`, keyed by direction. */
export const gradientAngles = {
  vertical: { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
  horizontal: { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } },
  diagonal: { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
} as const;

export type GradientAngleToken = keyof typeof gradientAngles;
