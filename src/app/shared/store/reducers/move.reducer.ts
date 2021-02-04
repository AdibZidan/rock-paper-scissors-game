import { selectMove } from '@actions/move.actions';
import { Move } from '@interfaces/move.interface';
import { Action, createReducer, on } from '@ngrx/store';

const initialMoveState: undefined | Move = undefined;

const _moveReducer = createReducer(
  initialMoveState,
  on(
    selectMove,
    (state: undefined | Move, { name, image }): Move => ({ name, image })
  )
);

export function moveReducer(
  state: undefined | Move,
  action: Action
): undefined | Move {
  return _moveReducer(state, action);
}
