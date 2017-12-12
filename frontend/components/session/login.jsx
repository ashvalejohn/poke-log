import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render(){
    return (
      <div className='auth'>
        <h1 className='auth__title'>Log In</h1>
        <form action="" className='auth__form'>
          <label htmlFor="" className='auth__form-field'>Email Address
            <input type="email"/>
          </label>
          <label htmlFor="" className='auth__form-field'>Password
            <input type="password"/>
          </label>
        </form>
        <div className='auth__login-signup'>
          <button className='auth__submit'>Log In</button>
          <p>Don’t have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    )
  }
}

export default Login;