import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';






export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeatMap));