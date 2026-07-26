export interface QuestionConfig {
  readonly id: string;
  readonly prompt: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
}

export type GameplayStage = 'question' | 'reward' | 'levelComplete' | 'newExhibit';

export interface LevelResult {
  readonly correctAnswers: number;
  readonly totalQuestions: number;
  readonly starsEarned: number;
  readonly coinsEarned: number;
}
