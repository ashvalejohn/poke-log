import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../../actions/session-actions';
import Signup from './signup';

const mapStateToProps = state => ({
  // errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signupUser(formUser)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
