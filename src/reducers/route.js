import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  appNavigator: null,
  mainNavigator: null,
  gamesNavigator: null,
  teamsNavigator: null,
  settingsNavigator: null,
  rulesNavigator: null,
  adminNavigator: null,
});

const appNavigator = (state, action) => ({
  ...state,
  appNavigator: action.appNavigator,
});
const mainNavigator = (state, action) => ({
  ...state,
  mainNavigator: action.mainNavigator,
});
const gamesNavigator = (state, action) => ({
  ...state,
  gamesNavigator: action.gamesNavigator,
});
const teamsNavigator = (state, action) => ({
  ...state,
  teamsNavigator: action.teamsNavigator,
});
const settingsNavigator = (state, action) => ({
  ...state,
  settingsNavigator: action.settingsNavigator,
});
const rulesNavigator = (state, action) => ({
  ...state,
  rulesNavigator: action.rulesNavigator,
});
const adminNavigator = (state, action) => ({
  ...state,
  adminNavigator: action.adminNavigator,
});
const actionHandlers = {
  [Types.SET_APP_NAVIGATOR]: appNavigator,
  [Types.SET_MAIN_NAVIGATOR]: mainNavigator,
  [Types.SET_GAMES_NAVIGATOR]: gamesNavigator, 
  [Types.SET_TEAMS_NAVIGATOR]: teamsNavigator,
  [Types.SET_SETTINGS_NAVIGATOR]: settingsNavigator,
  [Types.SET_RULES_NAVIGATOR]: rulesNavigator,
  [Types.SET_ADMIN_NAVIGATOR]: adminNavigator,
};

export default createReducer(initialState, actionHandlers);
