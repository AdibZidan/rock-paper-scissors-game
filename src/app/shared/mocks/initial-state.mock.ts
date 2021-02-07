import { AppState } from '@interfaces/app-state.interface';
import { viewsMock } from './views.mock';

export const initialState: AppState = {
  views: viewsMock,
  moves: {
    move: {
      name: '',
      image: '',
      strengths: [],
      weaknesses: []
    },
    randomHouseMove: {
      name: '',
      image: '',
      strengths: [],
      weaknesses: []
    }
  },
  score: 0,
  message: ''
};
