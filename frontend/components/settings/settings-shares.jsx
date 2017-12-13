import React, { Component } from 'react';
import Modal from 'react-modal';

class SettingsShares extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shares: [],
      showModal: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  openModal() {
    this.setState({
      showModal: true,
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
    })
  }

  handleModalChange(e) {
    e.preventDefault();
    this.setState({
      dose: e.target.value,
    })
  }

  handleModalSubmit(e) {
    e.preventDefault();
    alert(this.state.dose);
    // TODO: Insert action to update user dose
  }

  render() {
    return (
      <div>
        <label className='settings__label' htmlFor="shares">Shared Pokes</label>
        <ul id='shares'>
          {
            this.props.shares.map(share => (
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
        <Modal isOpen={this.state.showModal}>
          <button onClick={this.closeModal}>X</button>
          <h1>Set Single Dose</h1>
          <form onSubmit={this.handleModalSubmit}>
            <label>Single Dose (in mL)</label>
            <input type="text" placeholder={this.props.dose} onChange={this.handleModalChange} />
            <input type="submit" />
          </form>
        </Modal>
      </div>
    )
  }
}

export default SettingsShares;