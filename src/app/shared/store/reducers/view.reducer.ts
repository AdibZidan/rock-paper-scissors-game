import { hideView, showView } from '@actions/view.actions';
import { ViewHelper } from '@helpers/view.helper';
import { Views } from '@interfaces/views.state';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const initialViewsState: Views = {
  modeSelector: {
    isShown: true
  },
  original: {
    isShown: false
  },
  bonus: {
    isShown: false
  },
  arena: {
    isShown: false
  },
  battleground: {
    isShown: false
  },
  modal: {
    isShown: false
  }
};

const _viewReducer: ActionReducer<Views, Action> = createReducer(
  initialViewsState,
  on(
    showView, (state, { viewType }): Views => ViewHelper.getUpdatedView(state, viewType, true)
  ),
  on(
    hideView, (state, { viewType }): Views => ViewHelper.getUpdatedView(state, viewType, false)
  )
);

export function viewReducer(
  state: undefined | Views,
  action: Action
): Views {
  return _viewReducer(state, action);
}
