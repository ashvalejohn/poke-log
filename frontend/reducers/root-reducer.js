import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import pokeReducer from './poke-reducer';
import settingsReducer from './settings-reducer';
import logReducer from './log-reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  poke: pokeReducer,
  settings: settingsReducer,
  loggedPokes: logReducer,
});

export default rootReducer;