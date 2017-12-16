import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from './calendar';
import { fetchPokes } from '../../actions/poke-log-actions';
import { updateMonth } from '../../actions/ui-actions';

const mapStateToProps = state => ({
  pokes: getCurrentMonthPokes(state),
  currentMonth: state.ui.currentMonth,
});

const mapDispatchToProps = dispatch => ({
  fetchPokes: date => dispatch(fetchPokes(date)),
  changeMonth: month => dispatch(updateMonth(month)),
});

function getCurrentMonthPokes(state){
  const month  = state.ui.currentMonth;
  let currentMonthPokes = {};
  Object.keys(state.loggedPokes).forEach(key => {
    const poke = state.loggedPokes[key];
    const date = poke.date;
    if (date.slice(5, 7) == month + 1) {
      currentMonthPokes[poke.id] = poke;
    }
  });
  return currentMonthPokes;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));