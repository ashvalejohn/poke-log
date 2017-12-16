import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../../actions/session-actions';
import { clearErrors } from '../../actions/error-actions';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signupUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
