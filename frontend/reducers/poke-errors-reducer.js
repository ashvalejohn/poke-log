import RECEIVE_POKE_ERRORS from '../actions/log-poke-actions';

const pokeErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_POKE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default pokeErrorsReducer;
