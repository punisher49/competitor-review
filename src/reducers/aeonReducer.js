import { GET_AEONS, AEONS_LOADING } from '../actions/types';
const initialState = {
  aeons: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AEONS:
      return {
        ...state,
        isLoading: true
      };
    case AEONS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
