import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from './calendar';
import { fetchPokes } from '../../actions/poke-log-actions';

const mapStateToProps = state => ({
  pokes: state.loggedPokes,
});

const mapDispatchToProps = dispatch => ({
  fetchPokes: date => dispatch(fetchPokes(date))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));