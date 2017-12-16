import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import pokeReducer from './poke-reducer';
import settingsReducer from './settings-reducer';
import logReducer from './log-reducer';
import errorsReducer from './errors-reducer';
import uiReducer from './ui-reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  poke: pokeReducer,
  settings: settingsReducer,
  loggedPokes: logReducer,
  errors: errorsReducer,
  ui: uiReducer,
});

export default rootReducer;
