import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { Moves } from '@interfaces/moves.interface';
import { createSelector, MemoizedSelector } from '@ngrx/store';

const initialMovesState = (state: AppState): Moves => state.moves;

export const selectMove: MemoizedSelector<AppState, Move> = createSelector(
  initialMovesState,
  ({ move }): Move => move
);

export const selectRandomHouseMove: MemoizedSelector<AppState, Move> = createSelector(
  initialMovesState,
  ({ randomHouseMove }): Move => randomHouseMove
);
