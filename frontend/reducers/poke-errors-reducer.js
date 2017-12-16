import { RECEIVE_POKE_ERRORS, RECEIVE_POKE } from '../actions/log-poke-actions';
import { CLEAR_ERRORS } from '../actions/error-actions';

const pokeErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_POKE_ERRORS:
      return action.errors;
    case RECEIVE_POKE:
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default pokeErrorsReducer;
