import { createAction, props } from '@ngrx/store';

export const resetMode = createAction('Reset Mode');
export const chooseMode = createAction('Choose a Mode');

export const setMode = createAction(
  'Set Mode',
  props<{ mode: string; }>()
);
