import axios from "axios";
import { GET_CARREFOURS, CARREFOURS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getCarrefours = () => (dispatch, getState) => {
  dispatch({ type: CARREFOURS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/carrefours/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_CARREFOURS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
