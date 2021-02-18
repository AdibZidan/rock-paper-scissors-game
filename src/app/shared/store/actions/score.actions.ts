import { createAction } from '@ngrx/store';

export const resetScore = createAction('Reset the Score');
export const incrementScore = createAction('Increment the Score');
export const decrementScore = createAction('Decrement the Score');
