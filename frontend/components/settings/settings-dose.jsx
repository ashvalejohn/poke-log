import React, { Component } from 'react';

class SettingsDose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dosage: this.props.dosage,
    }

    this.handleChange = this.handleChange.bind(this);
    this.makeEdit = this.makeEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  makeEdit() {
    console.log("Make changes");
    const inputTag = document.getElementById('settingsDose');
    const saveButton = document.getElementById('saveDose');
    const editButton = document.getElementById('editDose');
    inputTag.readOnly = false;
    inputTag.classList.add('settings__input--save');
    editButton.classList.add('hidden');
    saveButton.classList.remove('hidden');
  }

  saveEdit(){
    console.log("Save changes");
    const inputTag = document.getElementById('settingsDose');
    const saveButton = document.getElementById('saveDose');
    const editButton = document.getElementById('editDose');
    inputTag.readOnly = true;
    inputTag.classList.remove('settings__input--save');
    saveButton.classList.add('hidden');
    editButton.classList.remove('hidden');
    // call this.props.update() to send new dose to settings parent
    this.props.update(this.state);
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({
      dosage: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>Single Dose in mL</p>
        <label className='settings__label'>
          <input id='settingsDose' className='settings__input' placeholder={this.props.dosage} onChange={this.handleChange} readOnly />
          <button id='editDose' onClick={this.makeEdit} className='settings__input__button--edit'></button>
          <button id='saveDose' onClick={this.saveEdit} className='settings__input__button--save hidden'></button>
        </label>
      </div>
    )
  }
}

export default SettingsDose;


