import axios from "axios";
import { GET_HEROS, HEROS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getHeros = () => (dispatch, getState) => {
  dispatch({ type: HEROS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/heros/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_HEROS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
