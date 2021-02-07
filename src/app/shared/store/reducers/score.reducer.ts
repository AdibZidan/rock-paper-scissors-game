import { decrementScore, incrementScore } from '@actions/score.actions';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const initialScoreState: number = 0;

const _scoreReducer: ActionReducer<number, Action> = createReducer(
  initialScoreState,
  on(
    incrementScore,
    (state: number): number => state + 1
  ),
  on(
    decrementScore,
    (state: number): number => state - 1
  )
);

export function scoreReducer(
  state: undefined | number,
  action: Action
): number {
  return _scoreReducer(state, action);
}