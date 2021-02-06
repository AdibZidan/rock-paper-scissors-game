import { selectMove } from '@actions/move.actions';
import { MoveHelper } from '@helpers/move.helper';
import { Moves } from '@interfaces/moves.interface';
import { Action, createReducer, on } from '@ngrx/store';

const initialMovesState: Moves = {
  move: {
    name: '',
    image: '',
    strengths: [],
    weaknesses: []
  },
  randomHouseMove: {
    name: '',
    image: '',
    strengths: [],
    weaknesses: []
  }
};

const _moveReducer = createReducer(
  initialMovesState,
  on(
    selectMove,
    (state, action) => {
      return ({
        move: action,
        randomHouseMove: MoveHelper.getRandomMove()
      });
    }
  )
);

export function moveReducer(
  state: undefined | Moves,
  action: Action
): Moves {
  return _moveReducer(state, action);
}
