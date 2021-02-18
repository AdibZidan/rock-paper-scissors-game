import { ViewType } from '@enums/view-type.enum';
import { createAction, props } from '@ngrx/store';

export const resetViews = createAction('Reset all the Views');

export const showView = createAction(
  'Show View',
  props<{ viewType: ViewType; }>()
);

export const hideView = createAction(
  'Hide View',
  props<{ viewType: ViewType; }>()
);
