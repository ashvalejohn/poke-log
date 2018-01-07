import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import LoginContainer from './session/login-container';
import SignupContainer from './session/signup-container';
import LogPokeContainer from './log-poke/log-poke-container';
import SettingsContainer from './settings/settings-container';
import CalendarContainer from './calendar/calendar-container';
import Splash from './splash/splash';

import Nav from './nav';


// If User is not loggedin (e.g. state.session === undefined) redirect to "login" when navigating to "/"
// Else, redirect to "log-a-poke"
const defaultRedirect = (state) => {
  const loggedIn = typeof state.session !== undefined ? false : true;
  return loggedIn ? <Redirect to='/log-a-poke' /> : <Redirect to='/login' />;
};

const App = () => (
  <div>
    <ProtectedRoute path='/log-a-poke' component={LogPokeContainer} />
    <ProtectedRoute path='/poke-log' component={CalendarContainer} />
    <ProtectedRoute path='/settings' component={SettingsContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <Route path='/splash' component={Splash} />
    <Route path='/' component={Nav} />
    <Route exact path ='/' component={defaultRedirect} />
  </div>
);

export default App;