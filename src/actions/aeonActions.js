import axios from 'axios';
import { GET_AEONS, AEONS_LOADING } from './types';
import {tokenConfig} from "./authActions"
import {returnErrors} from './errorActions'

export const getAeons = () => (dispatch, getState) => {
  dispatch(setAeonsLoading())
  axios.get('http://localhost:5000/aeons', tokenConfig(getState))
  .then(res =>
    dispatch({
      type: GET_AEONS,
      payload: res.data
    })
  )
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
)

};
// export const getAeons = () => dispatch => {
//   dispatch(setAeonsLoading());
//   axios.get('http://localhost:5000/aeons').then(res =>
//     dispatch({
//       type: GET_AEONS,
//       payload: res.data
//     })
//   );
// };

export const setAeonsLoading = () => ({
  type: AEONS_LOADING
});
// return function(dispatch) {
//     return axios.get("https://api.myjson.com/bins/19dtxc")
//       .then(({ data }) => {
//       dispatch(setArticleDetails(data));
//     });
// export const setAeonsLoading = () => {
//   return{
//     type: AEONS_LOADING
//   }
// }
//
// export const getItems = () => dispatch => {
//   dispatch(setItemsLoading());
//   axios.get('/api/items').then(res =>
//     dispatch({
//       type: GET_ITEMS,
//       payload: res.data
//     })
//   );
// };
