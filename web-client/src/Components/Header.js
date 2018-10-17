import React, { Component } from 'react';
import '../styles/Header.css';

const Header = props => {
  const { history, userName } = props;
  return (
    <div className="headerContainer">
      <div className="headerInfoContainer">
        <div>{`Welcome, ${  userName  }!`}</div>
      </div>
    </div>
  );
};

export default Header;
