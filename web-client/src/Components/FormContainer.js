import React, { Component } from 'react';
import '../styles/FormContainer.css';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import InputField from './InputField';

class FormContainer extends Component {
  constructor(props) {
    super(props); // access props

    this.state = {
      Username: '',
      Password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(this.state.Username);
  }

  render() {
    const { history } = this.props;
    return (
      <div className="background-rect">
        <div className="inputs">
          <input
            name="Username"
            value={this.state.Username}
            onChange={this.handleInputChange}
            description="Username"
            placeholder="user@gmail.com"
            type="text"
            className="input"
          />
          <input
            name="Password"
            value={this.state.Password}
            onChange={this.handleInputChange}
            className="input"
            description="Password"
            placeholder="Password"
            type="password"
          />
        </div>

        <div>
          <Button
            className="form-button"
            onClick={() =>
              history.push({ pathname: '/main', state: { Username: this.state.Username } })
            }
          >
            Sign In
          </Button>
        </div>

        <div>
          <Button className="form-button" bsStyle="primary">
            {' '}
            Create account{' '}
          </Button>
        </div>
      </div>
    );
  }
}

export default FormContainer;
