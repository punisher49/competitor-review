import axios from "axios";
import { GET_GRANDS, GRANDS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getGrands = () => (dispatch, getState) => {
  dispatch({ type: GRANDS_LOADING });
  axios
    .get("https://hidden-dawn-00072.herokuapp.com/grands/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_GRANDS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
