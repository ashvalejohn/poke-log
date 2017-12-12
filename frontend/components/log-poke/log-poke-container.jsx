import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LogPoke from './log-poke';

// const mapDispatchToProps = (dispatch) => ({
//     // need to dispatch poke AND bleed
//     // will be sending 1 or 2 for dosage to backend 
//     // so that it can be calculated in the controller
// });

export default withRouter(connect(null, null)(LogPoke));

