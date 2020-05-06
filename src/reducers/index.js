import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import aeonReducer from './aeonReducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  aeon: aeonReducer
})
