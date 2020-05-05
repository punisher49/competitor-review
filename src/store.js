import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {}
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools
))


export default store
