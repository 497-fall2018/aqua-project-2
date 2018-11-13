import React, { Component } from 'react';
import '../styles/MatchedUser.css';
import axios from 'axios';

class MatchedUser extends Component {
  constructor(props) {
    super(props);

    this.confirmHandler = this.confirmHandler.bind(this)
  }
  contactHandler(evt) {
  }
  confirmHandler(evt) {
    axios.get('http://localhost:8080/notify/'+this.props.recipient+'/'+this.props.user)
    .then(res => {
        console.log(res.data);
    }).catch(err => {
      console.log(err)
    });

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
