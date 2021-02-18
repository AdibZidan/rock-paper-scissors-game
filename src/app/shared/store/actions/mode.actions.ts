import { createAction, props } from '@ngrx/store';

export const chooseMode = createAction('Choose a Mode');

export const setMode = createAction(
  'Set Mode',
  props<{ mode: string; }>()
);
