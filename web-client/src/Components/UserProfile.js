import React, { Component } from 'react';
import '../styles/UserProfile.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import editIcon from '../assets/images/edit.jpg';

library.add(faEdit);

class UserProfile extends Component {
  constructor(props) {
    super(props); // access props

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      Username: 'Willie Wildcat',
      Phone: '650-339-4731',
      Email: 'jamesxie2019@u.north...',
      Bio: 'CS student at Northwestern University.',
    };
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.handlerFromParant(false);
  }

  render() {
    return (
      <div className="userprofile-container">
        <div className="user-container">
          <img
            className="user-picture"
            src="https://i.pinimg.com/originals/f6/34/b9/f634b90aa5bdc4f7b6ed59bd553e97e5.jpg"
          />
          <div className="username">
            <h4>
              <strong>{this.state.Username}</strong>
            </h4>
          </div>
          <button className="edit-profile" onClick={this.submitHandler}>
            <FontAwesomeIcon icon="edit" />
          </button>
        </div>
        <div className="contact-details">
          <header>
            <h4>
              <em><strong>Contact</strong></em>
            </h4>
          </header>
          <div className="phone-details">
            Phone: {this.state.Phone}
          </div>

          <div className="email-details">
            {' '}
            Email: {this.state.Email}
          </div>
        </div>
        <div className="bio-details">
          <header>
            <h4>
            <em><strong>Bio
              </strong></em>
            </h4>
          </header>
          <div className="bio-info">{this.state.Bio}</div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
