import { RECEIVE_POKE_ERRORS, RECEIVE_POKE } from '../actions/log-poke-actions';

const pokeErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_POKE_ERRORS:
      return action.errors;
    case RECEIVE_POKE:
      return [];
    default:
      return state;
  }
};

export default pokeErrorsReducer;
