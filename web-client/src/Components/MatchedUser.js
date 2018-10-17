import React, { Component } from 'react';
import '../styles/MatchedUser.css';

class MatchedUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="matched-user-container">
        <div className="prof-pic" />
        Hello world!
      </div>
    );
  }
}

export default MatchedUser;
