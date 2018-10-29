import React, { Component } from 'react';
import '../styles/avatar.css';

class Avatar extends Component {
  render() {
    const { pic, name } = this.props;
    return (
      <div className="avatar">
        <img className="avatarPic" src={pic} />
      </div>
    );
  }
}

export default Avatar;
