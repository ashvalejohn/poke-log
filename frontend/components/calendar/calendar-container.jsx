import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from './calendar';

// const mapStateToProps = state => (
  // pokes: state.user.pokes;
// );

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(connect(null, null)(Calendar));