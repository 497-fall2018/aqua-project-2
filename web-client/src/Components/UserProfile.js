import React, { Component } from 'react';
import '../styles/UserProfile.css';

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
      </div>
    );
  }
}

export default UserProfile;
