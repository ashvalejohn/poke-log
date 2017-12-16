import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logPoke } from '../../actions/log-poke-actions';
import { clearErrors } from '../../actions/error-actions';
import LogPoke from './log-poke';



const mapDispatchToProps = (dispatch) => ({
    logPoke: poke => dispatch(logPoke(poke)),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(null, mapDispatchToProps)(LogPoke));
