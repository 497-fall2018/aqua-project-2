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
      <div className="matched-user-container">
        <div className="prof-pic" />
        Hello world!
      </div>
  )}
      else return null
  }
}

export default MatchedUser;
