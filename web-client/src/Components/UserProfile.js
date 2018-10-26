import React, { Component } from 'react';
import '../styles/UserProfile.css';
import editIcon from '../assets/images/edit.jpg';

class UserProfile extends Component {
  constructor(props) {
    super(props); // access props
    
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      showPastRides: true
    };
    }
    submitHandler(evt) {
        evt.preventDefault();
        this.state = {
            showPastRides: false
          };
        this.props.handlerFromParant(this.state.showPastRides);
    }
  render() {
    return (
      <div className="userprofile-container">
        <div className="user-container">
        <img
          className="user-picture"
          src="https://i.pinimg.com/originals/f6/34/b9/f634b90aa5bdc4f7b6ed59bd553e97e5.jpg"
        />
        Willie Wildcat
        <button className="edit-profile" onClick={this.submitHandler}>
          <img src={editIcon} height="30" width="30"/> 
        </button>
      </div>
      <div className="contact-details">
        Contact
        <div className="phone-details">Phone: 650-339-4731</div>
        
        <div className="email-details"> Email: jamesxie2019@u.northwes...</div>
      </div>
      <div className="bio-details">
        Bio: CS student at Northwestern
      </div>
      </div>
    );
  }
}

export default UserProfile;
