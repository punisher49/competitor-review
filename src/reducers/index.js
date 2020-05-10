import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import aeonReducer from './aeonReducer'
import carrefourReducer from './carrefourReducer'
import farmerReducer from './farmerReducer'
import foodhallReducer from './foodhallReducer'
import grandReducer from './grandReducer'
import heroReducer from './heroReducer'
import primoReducer from './primoReducer'
import ranchReducer from './ranchReducer'





export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  aeon: aeonReducer,
  carrefour: carrefourReducer,
  farmer: farmerReducer,
  foodhall: foodhallReducer,
  grand: grandReducer,
  hero: heroReducer,
  primo: primoReducer,
  rancho: ranchReducer,

})
