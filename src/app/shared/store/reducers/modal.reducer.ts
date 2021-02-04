import { hideModal, showModal } from '@actions/modal.actions';
import { Action, createReducer, on } from '@ngrx/store';

const initialModalState: boolean = false;

const _modalReducer = createReducer(
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
