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
  currentMonthPokes = {};
  Object.keys(state.loggedPokes).forEach(key => {
    const poke = loggedPokes[key];
    const date = poke.date;
    if (date.includes(state.ui.currentMonth)){
      currentMonthPokes[poke.id] = poke;
    }
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));