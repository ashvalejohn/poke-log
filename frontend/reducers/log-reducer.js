import { RECEIVE_POKES } from '../actions/poke-log-actions';
import { RECEIVE_CURRENT_USER } from '../actions/session-actions';
import merge from 'lodash/merge';

const logReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKES:
      return merge({}, state, action.pokes);
    case RECEIVE_CURRENT_USER:
      return action.currentUser ? state : {};
    default:
      return state;
  }
};

export default logReducer;
