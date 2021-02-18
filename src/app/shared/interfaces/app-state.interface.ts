import { Moves } from './moves.interface';
import { Views } from './views.state';

export interface AppState {
  mode: string;
  views: Views;
  moves: Moves;
  score: number;
  message: string;
}
