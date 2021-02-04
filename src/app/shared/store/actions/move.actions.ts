import { Move } from '@interfaces/move.interface';
import { createAction, props } from '@ngrx/store';

export const selectMove = createAction(
  'Select a Move',
  props<Move>()
);
