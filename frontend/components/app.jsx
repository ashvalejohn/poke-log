import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';

const App = () => (
  <div>
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
  </div>
)

export default App;