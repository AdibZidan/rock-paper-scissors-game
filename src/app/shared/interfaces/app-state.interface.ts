import { Moves } from './moves.interface';

export interface AppState {
  isModalShown: boolean;
  moves: Moves;
  score: number;
  message: string;
}
