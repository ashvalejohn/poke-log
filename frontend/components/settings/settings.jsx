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

    this.updateUser = this.updateUser.bind(this);
  }

  handleSignout(e){
    e.preventDefault();
    // ADD this.props.logout
  }  

  updateUser(newState){
    // setState with child component info, cb to action
    // TODO : send whole user object to DB, rerende
    console.log(newState);
    this.setState({
      newState
    }, console.log(this.state));

  }

  render(){
    return (
      <form className='settings'>
        <h1 className='settings__title'>Settings</h1>
        <div className='settings__fields'>
          <SettingsName name={this.state.name} update={this.updateUser}/>
          <SettingsDose dose={this.state.dose} update={this.updateUser}/>
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