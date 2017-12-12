import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';
import LogPokeContainer from './log-poke/log-poke-container';

const App = () => (
  <div>
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
    <Route path='/logpoke' component={LogPokeContainer} />
  </div>
)

export default App;