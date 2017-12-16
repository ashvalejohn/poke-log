import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange(e){
    this.setState({
      [e.target.type]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  render(){
    return (
      <div className='auth'>
        <h1 className='auth__title'>Log In</h1>
        <form className='auth__form'>
          <label htmlFor="" className='auth__form-field'>Email Address
            <input onChange={this.handleChange} type="email" autofocus="autofocus" className='auth__form-input' pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required/>
          </label>
          <label htmlFor="" className='auth__form-field'>Password
            <input onChange={this.handleChange} type="password" className='auth__form-input' minLength='6' required/>
          </label>
          <p className='auth__errors'>{this.props.errors}</p>
          <div className='auth__login-signup'>
            <button className='auth__submit' onClick={this.handleSubmit}>Log In</button>
            <p>Don’t have an account? <Link to='/signup'>Sign Up</Link></p>
          </div>
          
        </form>
      </div>
    );
  }
}

export default Login;
