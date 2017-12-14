import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import pokeReducer from './poke-reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  poke: pokeReducer
});

export default rootReducer;