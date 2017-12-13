import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import logPoke from '../../actions/log-poke-actions';
import LogPoke from './log-poke';



const mapDispatchToProps = (dispatch) => ({
    logPoke: poke => dispatch(logPoke(poke))
});

export default withRouter(connect(null, mapDispatchToProps)(LogPoke));

