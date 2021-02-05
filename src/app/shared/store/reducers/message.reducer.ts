import { showMessage } from '@actions/message.actions';
import { Action, createReducer, on } from '@ngrx/store';

const initialMessageState: string = '';

const _messageReducer = createReducer(
  initialMessageState,
  on(
    showMessage,
    (state, { message }): string => message
  )
);

export function messageReducer(
  state: undefined | string,
  action: Action
) {
  return _messageReducer(state, action);
}
