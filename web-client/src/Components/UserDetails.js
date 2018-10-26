import React, { Component } from 'react';
import PastRides from './PastRides';
import '../styles/UserDetails.css';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = {
      showPastRides: true,
    };
  }
  handleData(data) {
    this.setState({
      showPastRides: data
    });
  }
  render() {
    return (
      <div className="userdetails-container"> 
      {this.state.showPastRides ?
        (<div><UserProfile handlerFromParant={this.handleData}/></div>)
        : <EditProfile handlerFromParant={this.handleData}/>}
        <PastRides/>
        
      </div>
    );
  }
}

export default UserDetails;
