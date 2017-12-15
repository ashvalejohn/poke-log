import { combineReducers } from 'redux';
import pokeErrorsReducer from './poke-errors-reducer';

const errorsReducer = combineReducers({
  poke: pokeErrorsReducer
});

export default errorsReducer;
