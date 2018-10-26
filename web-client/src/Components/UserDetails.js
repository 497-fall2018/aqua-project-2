import React, { Component } from 'react';
import PastRides from './PastRides';
import '../styles/UserDetails.css';
import UserProfile from './UserProfile';

class UserDetails extends Component {
  render() {
    return (
      <div className="userdetails-container"> 
        <UserProfile />
        <PastRides/>
      </div>
    );
  }
}

export default UserDetails;
