import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';	import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types';


const initialState = {	const initialState = {
  items: [	  items: [],
    { id: uuid(), name: 'Eggs' },	  loading: false
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Candy' }	
  ]
};	};


export default function(state = initialState, action) {	export default function(state = initialState, action) {
  switch (action.type) {	  switch (action.type) {
    case GET_ITEMS:	    case GET_ITEMS:
      return {	      return {
        ...state	        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };	      };
    default:
      return state;
