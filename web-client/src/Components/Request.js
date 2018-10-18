import React, { Component } from 'react';

import '../styles/Request.css';

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempClass: "request-ride"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    // const { addRequest, getRequests } = this.props;
    const { destination, timeBuffer } = this.state;
    e.preventDefault();
    console.log(e)
    // console.log(addRequest);
    // addRequest({
    //   variables: {
    //     destination,
    //     timeBuffer,
    //   },
    // }).then(getRequests.refetch());
  }

  tempSubmit=()=>{
    this.setState({tempClass: "request-ride-submitted"})
    this.props.onSubmitHandler;
  }

  render() {
    const { destination, time } = this.state;

    return (
      
      <form className={this.state.tempClass} onSubmit={this.handleSubmit}>
      <img className="logo" src={require("../assets/images/FSLogo.svg")} />
        <div className="request-ride-airport-container">
          <div className="request-ride-category-header">Airport</div>
          <select
            className="request-ride-airport-input"
            defaultValue="Select a Destination"
            name="destination"
            onChange={this.handleChange}>
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
          <input
            className="request-ride-date-input"
            type="date"
            name="date"
          />
        </div>
        <div className="request-ride-pickup-container">
          <div className="request-ride-category-header">Pickup Location</div>
          <select
            className="request-ride-pickup-input"
            defaultValue="Select a Pickup Location"
            name="pickup">
            <option value="anywhere">Anywhere</option>
            <option value="northCampus">North Campus</option>
            <option value="southCampus">South Campus</option>
          </select>
        </div>
        
        <button className="request-ride-submit" onClick={this.tempSubmit} type="submit">Find a ride</button>
      </form>
    );
  }
}

export default Request;
