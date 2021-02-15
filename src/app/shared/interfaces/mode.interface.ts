import { Move } from './move.interface';

export interface Mode {
  chooseMove(move: Move): void;
  updateView(): void;
  trackByFn(index: number, move: Move): number;
}
