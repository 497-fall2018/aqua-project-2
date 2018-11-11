import React, { Component } from 'react';
import '../styles/MatchedUser.css';

class MatchedUser extends Component {
  constructor(props) {
    super(props);
  }
  contactHandler(evt) {
  }
  confirmHandler(evt) {
  }

  render() {
    const { showRequest } = this.props;

    if (showRequest) {
      return (
        <div className="matched-user-container">
          <div className="prof-pic" />
            <div className="profile-name">
              <h4>
                {this.props.name}
              </h4>
            </div>
            <div className="user-buttons">
              <button className="contact" onClick={this.contactHandler}>Contact</button>
              <button className="confirm" onClick={this.confirmHandler}>Confirm</button>
            </div>
            <div className="details">
              {this.props.location}{' '}
              <strong>{this.props.time}</strong>{' '}
              -----------------------------------------------------{' '}
              {this.props.airport}
            </div>
            

        </div>
      );
    }
    return null;
  }
}

export default MatchedUser;
