import { Moves } from './moves.interface';
import { Views } from './views.state';

export interface AppState {
  views: Views;
  moves: Moves;
  score: number;
  message: string;
}
