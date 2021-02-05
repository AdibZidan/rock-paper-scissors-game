import { selectRandomHouseMove } from '@actions/house-move.actions';
import { MoveHelper } from '@helpers/move.helper';
import { Move } from '@interfaces/move.interface';
import { Action, createReducer, on } from '@ngrx/store';

const initialRandomHouseMoveState: Move = {
  name: '',
  image: '',
  strengths: [],
  weaknesses: []
};

const _randomHouseMoveReducer = createReducer(
  initialRandomHouseMoveState,
  on(
    selectRandomHouseMove, (): Move => MoveHelper.getRandomMove()
  )
);

export function randomHouseMoveReducer(
  state: undefined | Move,
  action: Action
): Move {
  return _randomHouseMoveReducer(state, action);
}
