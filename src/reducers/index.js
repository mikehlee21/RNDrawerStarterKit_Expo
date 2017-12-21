import { combineReducers } from 'redux-immutable';
import globals from './globals';
import route from './route'; 

const applicationReducers = {
  globals,  
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
