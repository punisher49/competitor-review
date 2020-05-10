import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import aeonReducer from './aeonReducer'
import carrefourReducer from './carrefourReducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  aeon: aeonReducer,
  carrefour: carrefourReducer
})
