import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import merge from 'lodash/merge';

class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      dosage: this.props.dosage
      // shares: ['Susan Smith', 'Dr. Ortega'],
      // schedule: 'Every other day',
    };

    this.updateUser = this.updateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  updateUser(newState){
    this.props.updateUser(this.state);
    document.querySelector('.settings__update').classList.remove('settings__update--save');
    console.log(document.querySelector('.settings__update').classList);
  }

  handleChange(type){
    return (e) => {
      this.setState({
        [type]: e.target.value,
      })
      document.querySelector('.settings__update').classList.add('settings__update--save');
    }
  }

  handleLogout(){
    this.props.logout();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render(){
    console.log(this.props);
    return (
      <form className='settings'>
        <h1 className='settings__title'>Settings</h1>
        <div className='settings__fields'>
          <label className='settings__label'>Name
            <input 
              id='settingsName' 
              className='settings__input' 
              value={this.state.name} 
              placeholder="i.e. John Doe"
              onChange={this.handleChange('name')} />
          </label>
          <label className='settings__label'>Dose (in mL)
            <input
              id='settingsName'
              className='settings__input'
              value={this.state.dosage}
              placeholder="450"
              onChange={this.handleChange('dosage')} />
          </label>
        </div>
        <div className='settings_buttons'>
          <button className='settings__update' onClick={this.updateUser}>Update</button>
          <button className='settings__sign-out' onClick={this.handleLogout}>Sign Out</button>
        </div>
      </form>
    );
  }
}

export default Settings;
