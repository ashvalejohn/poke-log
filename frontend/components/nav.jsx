import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className='nav'>
    <Link to='/poke-log' className='nav__icon nav__icon--calendar'>
      <div className=''></div>
      <p>Poke Log</p>
    </Link>
    <Link to='/log-a-poke' className='nav__icon nav__icon--droplet'>
      <div className=''></div>
      <p>Log A Poke</p>
    </Link>
    <Link to='/settings' className='nav__icon nav__icon--settings'>
      <div className=''></div>
      <p>Settings</p>
    </Link>
  </div>
)

export default Nav;