import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import pokeReducer from './poke-reducer';
import settingsReducer from './settings-reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  poke: pokeReducer,
  settings: settingsReducer
});

export default rootReducer;