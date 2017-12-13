import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Settings from './settings';
// import { logout } from session actions

const mapStateToProps = state => ({
  // 
});

const mapDispatchToProps = dispatch => ({
  // ADD logout
});

export default withRouter(connect(null, null)(Settings));