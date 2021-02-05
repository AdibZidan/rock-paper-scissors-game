import { Move } from './move.interface';

export interface AppState {
  isModalShown: boolean;
  move: Move;
  randomHouseMove: Move;
  score: number;
  message: string;
}
