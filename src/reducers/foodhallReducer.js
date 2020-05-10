import { GET_FOODHALLS, FOODHALLS_LOADING } from '../actions/types';
const initialState = {
  foodhalls: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOODHALLS:
      return {
        ...state,
        foodhalls: action.payload,
        isLoading: true,
      };
    case FOODHALLS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
