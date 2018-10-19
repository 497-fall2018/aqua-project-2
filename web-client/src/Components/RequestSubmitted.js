import React, { Component } from 'react';
import '../styles/Request.css';

class RequestSubmitted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempClass: 'request-ride',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { destination, time } = this.state;

    return (
      <div className="request-ride-submitted">
        <img className="logo" src={require('../assets/images/FSLogo.svg')} />
        <div className="request-ride-airport-container">
          <div className="request-ride-category-header">Airport</div>
          <select
            className="request-ride-airport-input"
            defaultValue="Select a Destination"
            name="destination"
            onChange={this.handleChange}
          >
            <option value="ohare">O'Hare International Airport</option>
            <option value="midway">Midway International Airport</option>
          </select>
        </div>
        {/* SELECT time, type="time" converts to military time thing */}
        <div className="request-ride-time-container">
          <div className="request-ride-category-header">Time</div>
          <input
            className="request-ride-time-input"
            type="time"
            name="time"
            value={time}
            onChange={this.handleChange}
          />
        </div>
        <div className="request-ride-date-container">
          <div className="request-ride-category-header">Date</div>
          <input className="request-ride-date-input" type="date" name="date" />
        </div>
        <div className="request-ride-pickup-container">
          <div className="request-ride-category-header">Pickup Location</div>
          <select
            className="request-ride-pickup-input"
            defaultValue="Select a Pickup Location"
            name="pickup"
          >
            <option value="anywhere">Anywhere</option>
            <option value="northCampus">North Campus</option>
            <option value="southCampus">South Campus</option>
          </select>
        </div>

        <button className="request-ride-submit" onClick={this.props.onSubmitHandler}>
          Find a ride
        </button>
      </div>
    );
  }
}

export default RequestSubmitted;
