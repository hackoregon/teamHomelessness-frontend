 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import population from './Population';

 export default function createReducer(asyncReducers) {
   return combineReducers({
     routing: routerReducer,
     ...asyncReducers,
     population,
   });
 }
