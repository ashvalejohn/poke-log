import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Settings from './settings';
import { logout } from '../../actions/session-actions';

const mapStateToProps = state => ({
  // dosage: state.currentUser.dosage
  // name: state.currentUser.name
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
  
});

export default withRouter(connect(null, null)(Settings));