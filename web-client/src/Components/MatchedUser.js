import React, { Component } from 'react';
import '../styles/MatchedUser.css';

class MatchedUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {showRequest } = this.props
    
  if (showRequest) {
    return (
      <div className = "matched-user-container">
        <div className="prof-pic" />
        <div className="matched-user-container-items">
          <div className = "profile-name">
              <h4><strong>{this.props.name}</strong></h4>
          </div>
          <div className = "time">
            <h4>{this.props.time}</h4>
          </div>
          <div className = 'location'>
            <h4>{this.props.location}</h4>
          </div>
        </div>
      </div>
  )}
      else return null
  }
}

export default MatchedUser;
