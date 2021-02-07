import { Move } from '@interfaces/move.interface';
import { createAction, props } from '@ngrx/store';

export const chooseMove = createAction(
  'Choose a Move',
  props<Move>()
);

export const chooseWinner = createAction(
  'Choose a Winner',
  props<Move>()
);
