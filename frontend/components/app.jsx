import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login-container';

const App = () => (
  <div>
    <Route path='/login' component={LoginContainer} />
  </div>
)

export default App;