import { hideModal, showModal } from '@actions/modal.actions';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const initialModalState: boolean = false;

const _modalReducer: ActionReducer<boolean, Action> = createReducer(
  initialModalState,
  on(
    showModal, (): boolean => true
  ),
  on(
    hideModal, (): boolean => false
  )
);

export function modalReducer(
  state: undefined | boolean,
  action: Action
): boolean {
  return _modalReducer(state, action);
}
