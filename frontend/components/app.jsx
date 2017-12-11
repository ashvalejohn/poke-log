import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';

const App = () => (
  <div>
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
  </div>
)

export default App;