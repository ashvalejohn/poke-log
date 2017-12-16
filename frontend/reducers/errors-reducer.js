import { combineReducers } from 'redux';
import pokeErrorsReducer from './poke-errors-reducer';
import sessionErrorsReducer from './session-errors-reducer';

const errorsReducer = combineReducers({
  poke: pokeErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;
