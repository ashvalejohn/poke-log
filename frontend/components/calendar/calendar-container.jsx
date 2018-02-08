import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from './calendar';
import { fetchPokes } from '../../actions/poke-log-actions';
import { updateMonth } from '../../actions/ui-actions';

const mapStateToProps = state => ({
  pokes: getCurrentMonthPokes(state),
  currentMonth: state.ui.currentMonth,
  currentYear: state.ui.currentYear,
});

const mapDispatchToProps = dispatch => ({
  fetchPokes: date => dispatch(fetchPokes(date)),
  changeMonth: (month, year) => dispatch(updateMonth(month, year)),
});

function getCurrentMonthPokes(state){
  const month  = (state.ui.currentMonth + 1).toString().padStart(2, "0");
  const year = state.ui.currentYear;
  let currentMonthPokes = {};
  Object.keys(state.loggedPokes).forEach(key => {
    const poke = state.loggedPokes[key];
    const date = poke.date;
    if (date.slice(0, 7) == `${year}-${month}`) {
      currentMonthPokes[poke.id] = poke;
    }
  });
  return currentMonthPokes;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));
