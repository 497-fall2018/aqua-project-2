import React, { Component } from 'react';

import '../styles/Request.css';

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempClass: 'request-ride',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // handleSubmit(e) {
  //   const { addRequest, getRequests } = this.props;
  //   const { date, location_end, time_departure, location_start } = this.state;
  //   const time_buffer = 10;
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(addRequest);

  //   addRequest({
  //     variables: {
  //       date,
  //       time_buffer,
  //       location_start,
  //       location_end,
  //       time_departure,
  //     },
  //   }).then(getRequests.refetch());
  // }

  tempSubmit = () => {
    this.setState({ tempClass: 'request-ride-submitted' });
  };

  render() {
    const { time_departure } = this.state;
    const { handleChange } = this.props;
    const { handleAirChange } = this.props;

    return (
      <div className={this.state.tempClass}>
        <img className="logo" src={require('../assets/images/FSLogo.svg')} />
        <div className="request-ride-airport-container">
          <div className="request-ride-category-header">Airport</div>
          <select
            className="request-ride-airport-input"
            defaultValue="Select a Destination"
            name="location_end"
            onChange={handleChange}
          >
            <option value="Select a Destination" disabled>
              Select a Destination
            </option>
            <option value="ohare">O'Hare International Airport</option>
            <option value="midway">Midway International Airport</option>
          </select>
        </div>
        {/* SELECT time, type="time" converts to military time thing */}
        <div className="request-ride-date-container">
          <div className="request-ride-category-header">Date</div>
          <input
            className="request-ride-date-input"
            type="date"
            name="date"
            onChange={handleChange}
          />
        </div>
        <div className="request-ride-time-container">
          <div className="request-ride-category-header">Time</div>
          <input
            className="request-ride-time-input"
            type="time"
            name="time_departure"
            value={time_departure}
            onChange={handleChange}
          />
        </div>

        <div className="request-ride-pickup-container">
          <div className="request-ride-category-header">Pickup Location</div>
          <select
            className="request-ride-pickup-input"
            defaultValue="Select a Pickup Location"
            name="location_start"
            onChange={handleChange}
          >
            <option value="Select a Pickup Location" />
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

export default Request;
