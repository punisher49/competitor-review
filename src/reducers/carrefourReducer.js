import { GET_CARREFOURS, CARREFOURS_LOADING } from '../actions/types';
const initialState = {
  carrefours: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARREFOURS:
      return {
        ...state,
        carrefours: action.payload,
        isLoading: true,
      };
    case CARREFOURS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
