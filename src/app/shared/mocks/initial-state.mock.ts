import { AppState } from '@interfaces/app-state.interface';

export const initialState: AppState = {
  isModalShown: false,
  move: {
    name: '',
    image: ''
  },
  randomHouseMove: {
    name: '',
    image: ''
  },
  score: 0
};
