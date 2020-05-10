import axios from "axios";
import { GET_RANCHS, RANCHS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getRanchos = () => (dispatch, getState) => {
  dispatch({ type: RANCHS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/ranchos/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_RANCHS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
