export type GameState = 'menu' | 'playing' | 'complete';

export interface Level {
  id: number;
  title: string;
  description: string;
  scene: string;
  puzzleType: 'number-series' | 'loops' | 'logic' | 'if-else' | 'debug' | 'pattern' | 'reasoning' | 'combined';
  reward: string;
  hopeBotMessage: string;
  hint: string;
  backgroundImage: string;
  houseStage: number;
}

export interface Question {
  id: string;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  points: number;
}