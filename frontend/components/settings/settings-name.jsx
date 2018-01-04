import React, { Component } from 'react';

class SettingsName extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
    }

    this.handleChange = this.handleChange.bind(this);
    this.makeEdit = this.makeEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  makeEdit() {
    const inputTag = document.getElementById('settingsName');
    const saveButton = document.getElementById('saveName');
    const editButton = document.getElementById('editName');
    inputTag.readOnly = false;
    inputTag.classList.add('settings__input--save');
    editButton.classList.add('hidden');
    saveButton.classList.remove('hidden');
  }

  saveEdit() {
    const inputTag = document.getElementById('settingsName');
    const saveButton = document.getElementById('saveName');
    const editButton = document.getElementById('editName');
    inputTag.readOnly = true;
    inputTag.classList.remove('settings__input--save');
    saveButton.classList.add('hidden');
    editButton.classList.remove('hidden');
    // call this.props.update() to send new dose to settings parent
    this.props.update(this.state);
  }


  handleChange(e){
    e.preventDefault();
    this.setState({
      name: e.target.value,
    })
  }

  render(){
    return (
      <div>
        <p>Name</p>
        <label className='settings__label'>
          <input id='settingsName' className='settings__input' placeholder={this.props.name} onChange={this.handleChange} readOnly/>
        </label>
      </div>
    )
  }
}

export default SettingsName;