import React, { Component } from 'react';

class SettingsName extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      showModal: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(){
    const inputTag = document.getElementById('settingsName');
    const button = document.getElementById('toggleEditName');
    if (inputTag.readOnly) {
      inputTag.readOnly = false;
      inputTag.classList.add('settings__input--save');
      button.classList.add('settings__input__button--save');
    } else {
      inputTag.readOnly = true;
      inputTag.classList.remove('settings__input--save');
      button.classList.remove('settings__input__button--save');
    }
  }


  handleChange(e){
    e.preventDefault();
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    alert(this.state.name);
    // TODO: Insert action to update user name
  }

  render(){
    return (
      <div>
        <p>Name</p>
        <label className='settings__label' htmlFor="singleDose">
          <input id='settingsName' className='settings__input' placeholder={this.props.name} readOnly/>
          <button id='toggleEditName' onClick={this.toggleEdit} className='settings__input__button--edit'></button>
        </label>
      </div>
    )
  }
}

export default SettingsName;