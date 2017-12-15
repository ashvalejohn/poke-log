import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import pokeReducer from './poke-reducer';
import settingsReducer from './settings-reducer';
import errorsReducer from './errors-reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  poke: pokeReducer,
  settings: settingsReducer,
  errors: errorsReducer
});

export default rootReducer;
