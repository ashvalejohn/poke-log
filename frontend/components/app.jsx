import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';
import Settings from './settings/settings';
import Nav from './nav';

const App = () => (
  <div>
    <Route path='/settings' component={Settings} />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <Route path='/' component={Nav} />
  </div>
)

export default App;