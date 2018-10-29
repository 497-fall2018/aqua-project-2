import React, { Component } from 'react';
import '../styles/UserProfile.css';
import editIcon from '../assets/images/edit.jpg';

class UserProfile extends Component {
  constructor(props) {
    super(props); // access props
    
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      Username:'Willie Wildcat',
      Phone:'650-339-4731',
      Email:'jamesxie2019@u.north...',
      Bio:'CS student at Northwestern University.',
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
          <div className="username"><h4><strong>{this.state.Username}</strong></h4></div>
          <button className="edit-profile" onClick={this.submitHandler}>
            <img src={editIcon} height="30" width="30"/> 
          </button>
       </div>
        <div className="contact-details">
          <header><h4><strong>Contact</strong></h4></header>
        <div className="phone-details"><strong>Phone</strong>: {this.state.Phone}</div>
        
        <div className="email-details"> <strong>Email</strong>: {this.state.Email}</div>
        </div>
        <div className="bio-details">
        <h4><strong>Bio</strong></h4> 
          <div className = "bio-info">
            {this.state.Bio}
          </div>

          
        </div>
      </div>
    );
  }
}

export default UserProfile;
