import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'John Smith',
      dose: '250',
      shares: ['Susan Smith', 'Dr. Ortega'],
      schedule: 'Every other day',
    }

    super(props);
  }

  handleSignout(e){
    e.preventDefault();
    // ADD this.props.logout
  }  

  render(){
    return (
      <section className='settings'>
        <h1 className='settings__title'>Settings</h1>
        <div className='settings__fields'>
          <label className='settings__label' htmlFor="singleDose">Name</label>
          <div id='singleDose' className='settings__input'>
            <p>{this.state.name}</p>
            <img className='settings__input--edit' src="../images/icons/pencil-edit.svg" alt="" />
          </div>
          <label className='settings__label' htmlFor="singleDose">Single Dose</label>
            <div id='singleDose' className='settings__input'>
              <p>{this.state.dose}mL</p>
              <img className='settings__input--edit' src="../images/icons/pencil-edit.svg" alt=""/>
            </div>
          <label className='settings__label' htmlFor="shares">Shared Pokes</label>
            <ul id='shares'>
              {
                this.state.shares.map(share => (
                  <li key={share} className='settings__input'>
                    <p>{share}</p>
                    <img className='settings__input--edit' src="../images/icons/pencil-edit.svg" alt="" />
                  </li>
                ))
              }
              <li className='settings__input settings__input--new'>
                <p>New share</p>
                <img className='settings__input--edit' src="../images/icons/plus-sign.svg" alt="" />
              </li>
            </ul>
          <label className='settings__label' htmlFor="">Schedule</label>
          <label id='schedule' className='settings__input'>
            <p>{this.state.schedule}</p>
            <img className='settings__input--edit' src="../images/icons/pencil-edit.svg" alt="" />
          </label>
        </div>
        <button className='settings__sign-out'>Sign Out</button>
      </section>
    )
  }
}

export default Settings;