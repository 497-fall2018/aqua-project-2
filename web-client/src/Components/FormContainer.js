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
      regUser: '',
      regPass: '',
      regUserVer: '',
      regUserPhone: '',
      register: false,
      emptyField: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    console.log('works');
  }

  async handleRegisterSubmit() {
    const { regUser, regUserPhone, regUserVer, regPass, emptyField } = this.state;
    const data = {
      email: regUser,
      email_verification: regUserVer,
      password: regPass,
      phone: regUserPhone,
    };

    if (
      regUser !== regUserVer ||
      regUser.length === 0 ||
      regUserVer.length === 0 ||
      regPass.length === 0 ||
      regUserPhone.length === 0
    ) {
      this.setState({ emptyField: true });
    } else {
      this.setState({ emptyField: false });
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(res);
    }
  }

  renderInputs() {
    const { history } = this.props;

    if (!this.state.register) {
      return (
        <div>
          <div className="inputs">
            <input
              name="Username"
              value={this.state.Username}
              onChange={this.handleInputChange}
              description="Username"
              placeholder="you@u.northwestern.edu"
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
            <Button
              className="form-button"
              bsStyle="primary"
              onClick={() => this.setState({ register: true })}
            >
              {' '}
              Create account{' '}
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="inputs">
          <input
            name="regUser"
            value={this.state.regUser}
            onChange={this.handleInputChange}
            description="regUser"
            placeholder="you@u.northwestern.edu"
            type="text"
            className="input"
          />
          <input
            name="regUserVer"
            value={this.state.regUserVer}
            onChange={this.handleInputChange}
            description="regUserVer"
            placeholder="Verify your email"
            type="text"
            className="input"
          />
          <input
            name="regUserPhone"
            value={this.state.regUserPhone}
            onChange={this.handleInputChange}
            description="regUserPhone"
            placeholder="Phone (1234567890)"
            type="number"
            className="input"
          />

          <input
            name="regPass"
            value={this.state.regPass}
            onChange={this.handleInputChange}
            className="input"
            description="regPass"
            placeholder="Password"
            type="password"
          />
        </div>
        <div>
          <Button className="form-button" bsStyle="primary" onClick={this.handleRegisterSubmit}>
            {' '}
            Create account{' '}
          </Button>
        </div>
        {this.state.emptyField ? (
          <div className="register__error">Fill all fields and make sure your emails match!</div>
        ) : null}
      </div>
    );
  }

  render() {
    return <div className="background-rect">{this.renderInputs()}</div>;
  }
}

export default FormContainer;
