import { chooseMode, setMode } from '@actions/mode.actions';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const initialModeState: string = '';

const _modeReducer: ActionReducer<string, Action> = createReducer(
  initialModeState,
  on(
    chooseMode,
    (state: string): string => state
  ),
  on(
    setMode,
    (state: string, { mode }): string => mode
  )
);

export function modeReducer(
  state: undefined | string,
  action: Action
): string {
  return _modeReducer(state, action);
}
