import axios from "axios";
import { GET_PRIMOS, PRIMOS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getPrimos = () => (dispatch, getState) => {
  dispatch({ type: PRIMOS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/primos/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_PRIMOS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
