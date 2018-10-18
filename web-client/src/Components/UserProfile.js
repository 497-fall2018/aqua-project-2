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
<<<<<<< HEAD
        <div className="user-picture" />
        <div className="user-name">Zack Aslan</div>
        <PastRides/>
=======
        <div className="welcome"> Welcome back, Zack! </div>
        <div className="user-container">
          <div className="user-picture" /><div className="user-name">Zack Aslan</div>
        </div>
>>>>>>> bd6a2a89a888d0a9dc07656385a7841c9033080a
      </div>
    );
  }
}

export default UserProfile;
