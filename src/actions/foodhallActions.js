import axios from "axios";
import { GET_FOODHALLS, FOODHALLS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getFoodhalls = () => (dispatch, getState) => {
  dispatch({ type: FOODHALLS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/foodhalls/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_FOODHALLS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
