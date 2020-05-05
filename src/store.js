import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware) )
)

export default store


// 
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const initialState = {};
// const middleware = [thunk];
// const applied = composeWithDevTools ( applyMiddleware(...middleware) ); //error!
// const store = createStore(rootReducer, initialState, applied);
//
//
// export default store;
