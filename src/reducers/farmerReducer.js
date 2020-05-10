import { GET_FARMERS, FARMERS_LOADING } from '../actions/types';
const initialState = {
  farmers: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FARMERS:
      return {
        ...state,
        farmers: action.payload,
        isLoading: true,
      };
    case FARMERS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
