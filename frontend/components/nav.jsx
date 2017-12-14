import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = () => (
  <div className='nav'>
    <NavLink 
      to='/poke-log' 
      className='nav__icon nav__icon--calendar' activeClassName='nav__icon--calendar--selected'>
      <div className=''></div>
      <p>Poke Log</p>
    </NavLink>
    <NavLink 
      to='/log-a-poke' 
      className='nav__icon nav__icon--droplet' 
      activeClassName='nav__icon--droplet--selected'>
      <div className=''></div>
      <p>Log A Poke</p>
    </NavLink>
    <NavLink 
      to='/settings' 
      className='nav__icon nav__icon--settings' 
      activeClassName='nav__icon--settings--selected'>
      <div className=''></div>
      <p>Settings</p>
    </NavLink>
  </div>
)

export default Nav;