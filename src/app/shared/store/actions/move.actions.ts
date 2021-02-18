import { Move } from '@interfaces/move.interface';
import { createAction, props } from '@ngrx/store';

export const chooseMove = createAction(
  'Choose a Move',
  props<{ move: Move, mode: string; }>()
);

export const chooseWinner = createAction(
  'Choose a Winner',
  props<Move>()
);
