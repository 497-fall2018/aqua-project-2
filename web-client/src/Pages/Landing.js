import React, { Component } from 'react';
import '../styles/Landing.css';
import FormContainer from '../Components/FormContainer';
import history from '../history';

const Landing = props => (
  <div className="landing">
    <div className="landing-image" />
    <div className="login-container">
      <h2> Sign In </h2>
      <FormContainer history={history} />
    </div>
  </div>
);

export default Landing;
