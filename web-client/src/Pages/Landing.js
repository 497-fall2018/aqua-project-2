import React, { Component } from 'react';
import '../styles/Landing.css';
import FormContainer from '../Components/FormContainer';
import history from '../history';
//import {GoogleLogin} from 'react-google-login';

class Landing extends Component {
  constructor(props) {
    super(props); // access props

  }
  render() {
    return(
      <div className="landing">
        <div className="landing-image" />
        <div className="login-container">
          <h2> Sign In </h2>
          <FormContainer history={history} />
        </div>
      </div>
    );
  }
}

export default Landing;
