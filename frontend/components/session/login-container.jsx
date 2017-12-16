import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/session-actions';
import { clearErrors } from '../../actions/error-actions';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(loginUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
