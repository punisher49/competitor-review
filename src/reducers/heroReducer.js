import { GET_HEROS, HEROS_LOADING } from '../actions/types';
const initialState = {
  heros: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HEROS:
      return {
        ...state,
        heros: action.payload,
        isLoading: true,
      };
    case HEROS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
