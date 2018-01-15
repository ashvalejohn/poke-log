import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser, loginUser } from '../../actions/session-actions';
import { clearErrors } from '../../actions/error-actions';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  login: formUser => dispatch(loginUser(formUser)),
  signup: formUser => dispatch(signupUser(formUser))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
