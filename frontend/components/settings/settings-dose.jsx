import React, { Component } from 'react';

class SettingsDose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dose: '',
      showModal: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    const inputTag = document.getElementById('settingsName');
    const button = document.getElementById('toggleEditDose');
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


  handleChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.name);
    // TODO: Insert action to update user name
  }

  render() {
    return (
      <div>
        <p>Single Dose in mL</p>
        <label className='settings__label' htmlFor="singleDose">
          <input id='settingsName' className='settings__input' placeholder={this.props.dose} readOnly />
          <button id='toggleEditDose' onClick={this.toggleEdit} className='settings__input__button--edit'></button>
        </label>
      </div>
    )
  }
}

export default SettingsDose;


