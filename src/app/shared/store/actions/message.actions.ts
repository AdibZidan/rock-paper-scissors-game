import { createAction, props } from '@ngrx/store';

export const showMessage = createAction(
  'Show Message',
  props<{ message: string; }>()
);
