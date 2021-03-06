import React, { Component } from 'react';
import '../styles/MatchedUser.css';
import axios from 'axios';

class MatchedUser extends Component {
  constructor(props) {
    super(props);

    this.confirmHandler = this.confirmHandler.bind(this);
  }

  contactHandler(evt) {}

  confirmHandler(evt) {
    axios
      .get(`http://localhost:8080/notify/${this.props.recipient}/${this.props.user}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { showRequest, prof_pic } = this.props;

    if (showRequest) {
      return (
        <div className="matched-user-container">
          <img className="prof-pic" src={prof_pic} />
          <div className="profile-name">
            <h4>{this.props.name}</h4>
          </div>
          <div className="user-buttons">
            {/* <button className="contact" onClick={this.contactHandler}>Contact</button> */}
            <a className="contact" href={`mailto:${`${this.props.recipient}@u.northwestern.edu`}`}>
              Contact
            </a>
            <button className="confirm" onClick={this.confirmHandler}>
              Confirm
            </button>
          </div>
          <div className="details">
            {this.props.location} <strong>{this.props.time}</strong>{' '}
            ---------------------------------------- {this.props.airport}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default MatchedUser;
