import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from './calendar';

// const mapStateToProps = state => (

// );

// const mapDispatchToProps = dispatch => ({
//   // dispatch getUserPokes(YYYY-MM)
// })

export default withRouter(connect(null, null)(Calendar));