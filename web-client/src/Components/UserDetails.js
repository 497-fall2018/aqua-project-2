import React, { Component } from 'react';
import PastRides from './PastRides';
import '../styles/UserDetails.css';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import SearchHistory from './SearchHistory';
import ScheduledRides from './ScheduledRides';

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
      showPastRides: data,
    });
  }

  render() {
    return (
      <div className="userdetails-container"> 
      {this.state.showPastRides ?
        (<div><UserProfile handlerFromParant={this.handleData}/>
          <div className="rides">
          <header>
            <h4>
            <em><strong>Scheduled Rides</strong></em>
            </h4>
          </header>
              <ScheduledRides/>
              <PastRides/>
          </div>
          <div className = 'search-history'>
            <SearchHistory/>
          </div>
        </div>)
        : <EditProfile handlerFromParant={this.handleData}/>}
        
      </div>
    );
  }
}

export default UserDetails;
