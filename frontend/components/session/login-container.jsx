import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session-actions';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));