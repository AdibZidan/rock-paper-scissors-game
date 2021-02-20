import { ViewType } from '@enums/view-type/view-type.enum';
import { AppState } from '@interfaces/app-state.interface';
import { View } from '@interfaces/view.interface';
import { Views } from '@interfaces/views.state';
import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

const initialViewsState = (state: AppState): Views => state.views;

export const selectView = (type: ViewType): MemoizedSelector<AppState, View, DefaultProjectorFn<View>> =>
  createSelector(
    initialViewsState,
    (state): View => state[type]
  );
