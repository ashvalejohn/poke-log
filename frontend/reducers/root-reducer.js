import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import settingsReducer from './settings-reducer';
import logReducer from './log-reducer';
import errorsReducer from './errors-reducer';
import bleedsReducer from "./bleeds-reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  settings: settingsReducer,
  loggedPokes: logReducer,
  bleeds: bleedsReducer,
  errors: errorsReducer
});

export default rootReducer;
