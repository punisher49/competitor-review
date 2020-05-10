import axios from "axios";
import { GET_FARMERS, FARMERS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getFarmers = () => (dispatch, getState) => {
  dispatch({ type: FARMERS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/farmers/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_FARMERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
