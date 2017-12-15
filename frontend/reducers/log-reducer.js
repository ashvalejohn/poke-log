import { RECEIVE_POKES } from '../actions/poke-log-actions';
import merge from 'lodash/merge';

const logReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKES:
      return merge({}, state, action.pokes);
    default:
      return state;
  }
}

export default logReducer;