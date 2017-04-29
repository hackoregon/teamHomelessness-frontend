 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import population from './Population';
 import definition from './Definition';

 export default function createReducer(asyncReducers) {
   return combineReducers({
     routing: routerReducer,
     ...asyncReducers,
     population,
     definition,
   });
 }
