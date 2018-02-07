import { UPDATE_MONTH } from '../actions/ui-actions';

const currentMonth = (new Date).getMonth();
const currentYear = (new Date).getFullYear();

const uiReducer = (state = { currentMonth, currentYear }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_MONTH:
      return { 
        currentMonth: action.month,
        currentYear: action.year,
      };
    default:
      return state;
  }
};

export default uiReducer;