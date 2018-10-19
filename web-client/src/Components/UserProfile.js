import React, { Component } from 'react';
import '../styles/UserProfile.css';
import PastRides from './PastRides';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        </div>

        <PastRides />
      </div>
    );
  }
}

export default UserProfile;
