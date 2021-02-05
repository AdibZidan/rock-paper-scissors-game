import { AppState } from '@interfaces/app-state.interface';

export const initialState: AppState = {
  isModalShown: false,
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
  },
  score: 0,
  message: ''
};
