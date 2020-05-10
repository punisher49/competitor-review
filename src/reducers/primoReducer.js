import { GET_PRIMOS, PRIMOS_LOADING } from '../actions/types';
const initialState = {
  primos: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRIMOS:
      return {
        ...state,
        primos: action.payload,
        isLoading: true,
      };
    case PRIMOS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
