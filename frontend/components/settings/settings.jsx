import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SettingsName from './settings-name';
import SettingsDose from './settings-dose';
import SettingsShares from './settings-dose';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'John Smith',
      dose: '250',
      shares: ['Susan Smith', 'Dr. Ortega'],
      schedule: 'Every other day',
      showModal: false,
    }

    super(props);
  }

  handleSignout(e){
    e.preventDefault();
    // ADD this.props.logout
  }  

  updateUser(e){
    // TODO : send whole user object to DB, rerender
  }

  render(){
    return (
      <form className='settings'>
        <h1 className='settings__title'>Settings</h1>
        <div className='settings__fields'>
          <SettingsName name={this.state.name}/>
          <SettingsDose dose={this.state.dose}/>
          {/* <SettingsShares shares={this.state.shares}/>
          
          
          <label className='settings__label' htmlFor="">Schedule</label>
          <label id='schedule' className='settings__input'>
            <p>{this.state.schedule}</p>
            <img className='settings__input--edit' src="../images/icons/pencil-edit.svg" alt="" />
          </label> */}
        </div>
        <button className='settings__sign-out'>Sign Out</button>
      </form>
    )
  }
}

export default Settings;