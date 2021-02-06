import { AppState } from '@interfaces/app-state.interface';
import { createSelector } from '@ngrx/store';

const initialAppState = (state: AppState): AppState => state;

export const selectMoveAndRandomHouseMove = createSelector(
  initialAppState,
  ({ move, randomHouseMove }) => ({ move, randomHouseMove })
);
