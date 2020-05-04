import axios from 'axios';
import {returnErrors} from './errorActions'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios.get('https://hidden-dawn-00072.herokuapp.com/auth/')
  .then(res => dispatch({
    type: USER_LOADED,
    payload: res.data
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({
      type: AUTH_ERROR
    })
  })
}

export const register = ( {email, company, name, country, state, position, password} ) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({email, company, name, country, state, position, password})

  axios.post('https://hidden-dawn-00072.herokuapp.com/users', body, config)
  .then(res => dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
    dispatch({
      type: REGISTER_FAIL
    })
  })
}
export const login = ( {email, password} ) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({email, password})

  axios.post('https://hidden-dawn-00072.herokuapp.com/auth', body, config)
  .then(res => dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
    dispatch({
      type: LOGIN_FAIL
    })
  })
}

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const tokenConfig = (getState) => {

  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }
  if(token){
    config.headers['x-auth-token'] = token
  }
  return config
}
