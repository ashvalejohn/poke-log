import React, { Component } from 'react';

class Login extends Component {
  render(){
    return (
      <div className='auth'>
        <h1>Log in</h1>
        <form action="" className='auth__form'>
        <label htmlFor="" className='auth__form-field'>Email Address:
          <input type="email"/>
        </label>
        <label htmlFor="" className='auth__form-field'>Password:
          <input type="password"/>
        </label>
        </form>
        <button className='auth__submit'>Log In</button>
      </div>
    )
  }
}

export default Login;