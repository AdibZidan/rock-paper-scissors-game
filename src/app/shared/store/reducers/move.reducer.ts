import { chooseMove, chooseWinner } from '@actions/move.actions';
import { MoveHelper } from '@helpers/move.helper';
import { Moves } from '@interfaces/moves.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

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

const _moveReducer: ActionReducer<Moves, Action> = createReducer(
  initialMovesState,
  on(
    chooseMove,
    (state, action) => ({
      move: action,
      randomHouseMove: MoveHelper.getRandomMove()
    })
  ),
  on(
    chooseWinner,
    (state, action) => {
      if (action.name === state.move.name) {
        return {
          move: { ...action, isWinner: true },
          randomHouseMove: state.randomHouseMove
        };
      } else {
        return {
          move: state.move,
          randomHouseMove: { ...action, isWinner: true }
        };
      }
    }
  )
);

export function moveReducer(
  state: undefined | Moves,
  action: Action
): Moves {
  return _moveReducer(state, action);
}
