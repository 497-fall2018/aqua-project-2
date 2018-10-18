import React, { Component } from 'react';
import '../styles/UserProfile.css';
import PastRides from '../Components/PastRides';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="userprofile-container">
        <div className="user-picture" />
        <div className="user-name">Zack Aslan</div>
        <PastRides/>
      </div>
    );
  }
}

export default UserProfile;
