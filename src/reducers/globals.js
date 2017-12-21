import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  data: { 
  }
});

const setData = (state, action) => ({
  ...state,
  data: Object.assign({},state.data, action.data) 
});

const actionHandlers = {
  [Types.SET_DATA]: setData,
};
export default createReducer(initialState, actionHandlers);
