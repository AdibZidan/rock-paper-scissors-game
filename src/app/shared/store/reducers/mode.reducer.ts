import { chooseMode, resetMode, setMode } from '@actions/mode.actions';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const initialModeState: string = '';

const _modeReducer: ActionReducer<string, Action> = createReducer(
  initialModeState,
  on(
    resetMode,
    (state: string): string => initialModeState
  ),
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
