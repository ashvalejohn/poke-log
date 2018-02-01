import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute, UnknownRoute } from '../util/route-util';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';
import LogPokeContainer from './log-poke/log-poke-container';
import SettingsContainer from './settings/settings-container';
import CalendarContainer from './calendar/calendar-container';
import Splash from './splash/splash';
import Nav from './nav';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path='/log-a-poke' component={LogPokeContainer} />
      <ProtectedRoute exact path='/poke-log' component={CalendarContainer} />
      <ProtectedRoute exact path='/settings' component={SettingsContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />
      <AuthRoute exact path='/signup' component={SignupContainer} />
      <AuthRoute exact path='/' component={Splash} />
      <UnknownRoute path='/*' />
    </Switch>
    <Nav />
  </div>
);

export default App;
