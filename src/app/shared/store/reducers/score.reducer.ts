import { decrementScore, incrementScore, resetScore } from '@actions/score.actions';
import { getExistingPropertyFromLocalStorage } from '@helpers/store.helper';
import { Action, createReducer, on } from '@ngrx/store';

const initialScoreState: number = 0;

const _scoreReducer = createReducer(
  initialScoreState,
  on(
    resetScore, (): number => initialScoreState
  ),
  on(
    incrementScore,
    (): number => {
      const score: string = getExistingPropertyFromLocalStorage('score');

      return parseInt(score) + 1;
    }
  ),
  on(
    decrementScore,
    (): number => {
      const score: string = getExistingPropertyFromLocalStorage('score');

      return parseInt(score) - 1;
    }
  )
);

export function scoreReducer(
  state: undefined | number,
  action: Action
) {
  return _scoreReducer(state, action);
}
