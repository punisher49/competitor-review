import { GET_GRANDS, GRANDS_LOADING } from '../actions/types';
const initialState = {
  grands: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GRANDS:
      return {
        ...state,
        grands: action.payload,
        isLoading: true,
      };
    case GRANDS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
