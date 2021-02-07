import { showMessage } from '@actions/message.actions';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const initialMessageState: string = '';

const _messageReducer: ActionReducer<string, Action> = createReducer(
  initialMessageState,
  on(
    showMessage,
    (state, { message }): string => message
  )
);

export function messageReducer(
  state: undefined | string,
  action: Action
): string {
  return _messageReducer(state, action);
}
