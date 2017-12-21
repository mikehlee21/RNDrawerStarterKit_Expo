import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  navigator: null,
  spinnerVisible: false,
  data: { 
    list: [],
    location: {latitude: 3.152427, longitude: 101.621126}
  }
});
const setNavigator = (state, action) => ({
  ...state,
  navigator: action.nav,
});
const spinnerVisible = (state, action) => ({
  ...state,
  spinnerVisible: action.spinnerVisible,
});
const setData = (state, action) => ({
  ...state,
  data: Object.assign({},state.data, action.data) 
});
const actionHandlers = {
  [Types.SET_NAVIGATOR]: setNavigator,
  [Types.SET_SPINNER_VISIBLE]: spinnerVisible,
  [Types.SET_DATA]: setData,
};
export default createReducer(initialState, actionHandlers);
