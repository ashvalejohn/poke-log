import { UPDATE_MONTH } from '../actions/ui-actions';

const currentMonth = (new Date).getMonth();

const uiReducer = (state = { currentMonth }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_MONTH:
      return { currentMonth: action.month };
    default:
      return state;
  }
};

export default uiReducer;