import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Settings from './settings';

import { logoutUser } from '../../actions/session-actions';
import { updateUser } from '../../actions/settings-actions';

const mapStateToProps = (state) => ({
  dosage: state.session.currentUser.dosage || "",
  name: state.session.currentUser.name
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));