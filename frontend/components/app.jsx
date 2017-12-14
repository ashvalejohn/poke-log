import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';
import LogPokeContainer from './log-poke/log-poke-container';
import SettingsContainer from './settings/settings-container';

import CalendarContainer from './calendar/calendar-container';

import Nav from './nav';

const App = () => (
  <div>
    <Route path='/log-a-poke' component={LogPokeContainer} />
    <Route path='/poke-log' component={CalendarContainer} />
    <Route path='/settings' component={SettingsContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <Route path='/' component={Nav} />
  </div>
);

export default App;