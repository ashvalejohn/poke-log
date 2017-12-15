import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// Users who are ALREADY logged in can't see auth routes
const Auth = ({component: Component, path, loggedIn}) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/log-a-poke" /> : <Component {...props} />
    )}
  />
);

// Users need to be logged in to see protected routes
const Protected = ({component: Component, path, loggedIn}) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Component /> : <Redirect to="/login" />
    )}
  />
);




export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));