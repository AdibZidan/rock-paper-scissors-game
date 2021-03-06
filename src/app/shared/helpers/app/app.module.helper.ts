import { AppState } from '@interfaces/app-state.interface';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { messageReducer } from '@reducers/message.reducer';
import { modeReducer } from '@reducers/mode.reducer';
import { moveReducer } from '@reducers/move.reducer';
import { scoreReducer } from '@reducers/score.reducer';
import { viewReducer } from '@reducers/view.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export const REDUCERS: any = {
  mode: modeReducer,
  views: viewReducer,
  moves: moveReducer,
  score: scoreReducer,
  message: messageReducer
};

export function localStorageSyncReducer(actionReducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: Object.keys(REDUCERS),
    rehydrate: true
  })(actionReducer);
}

export const META_REDUCERS: MetaReducer<AppState, Action>[] = [localStorageSyncReducer];
