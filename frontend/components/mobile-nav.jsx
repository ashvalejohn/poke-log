import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = () => (
  <div className='mobile-nav'>
    <NavLink to='/poke-log' className='mobile-nav__icon calendar--inactive'></NavLink>
    <NavLink to='/log-a-poke' className='mobile-nav__icon droplet--inactive'></NavLink>
    <NavLink to='/settings' className='mobile-nav__icon settings--inactive'></NavLink>
  </div>
)

export default MobileNav;