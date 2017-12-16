import RECEIVE_BLEEDS from '../actions/bleed-actions';
import merge from 'lodash/merge';

const bleedsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLEEDS:
      return merge({}, state, action.bleeds);
    default:
      return state;
  }
};

export default bleedsReducer;