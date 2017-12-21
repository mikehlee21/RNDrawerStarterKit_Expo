import Types from './actionTypes';

export const setNavigator = nav =>
  ({ type: Types.SET_NAVIGATOR, nav });
export const setSpinnerVisible = spinnerVisible =>
  ({ type: Types.SET_SPINNER_VISIBLE, spinnerVisible });
