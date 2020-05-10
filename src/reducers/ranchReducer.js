import { GET_RANCHS, RANCHS_LOADING } from '../actions/types';
const initialState = {
  ranchos: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RANCHS:
      return {
        ...state,
        ranchos: action.payload,
        isLoading: true,
      };
    case RANCHS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
