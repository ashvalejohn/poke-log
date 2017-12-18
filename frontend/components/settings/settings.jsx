import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SettingsName from './settings-name';
import SettingsDose from './settings-dose';

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
    this.handleLogout = this.handleLogout.bind(this);
  }

  updateUser(newState){
    let prevState = this.state;
    // setState with child component info, cb to action
    // TODO : send whole user object to DB, rerender
    this.setState(merge(prevState, newState));
    this.props.updateUser(this.state);
  }

  handleLogout(){
    this.props.logout();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render(){
    return (
      <form className='settings'>
        <h1 className='settings__title'>Settings</h1>
        <div className='settings__fields'>
          <SettingsName name={this.state.name} update={this.updateUser}/>
          <SettingsDose dosage= {this.state.dosage} update={this.updateUser}/>
        </div>
        <button className='settings__sign-out' onClick={this.handleLogout} >Sign Out</button>
      </form>
    );
  }
}

export default Settings;
