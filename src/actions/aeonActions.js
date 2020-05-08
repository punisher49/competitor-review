import axios from "axios";
import { GET_AEONS, AEONS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getAeons = () => (dispatch, getState) => {
  dispatch({ type: AEONS_LOADING });
  axios
    .get("http://localhost:5000/aeons/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_AEONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
