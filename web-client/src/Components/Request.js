import React, { Component } from 'react';
import '../styles/Main.css';

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {};

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
    // console.log(addRequest);
    // addRequest({
    //   variables: {
    //     destination,
    //     timeBuffer,
    //   },
    // }).then(getRequests.refetch());
  }

  render() {
    const { destination, time } = this.state;

    return (
      <form className="main-request-ride" onSubmit={this.handleSubmit}>
        <h2>Request a Ride</h2>
        <select
          className="main-request-ride-input"
          defaultValue="Select a Destination"
          name="destination"
          onChange={this.handleChange}
        >
          <option value="ohare">O'Hare</option>
          <option value="midway">Midway</option>
        </select>
        {/* SELECT time, type="time" converts to military time thing */}
        <input
          className="main-request-ride-input"
          type="time"
          name="time"
          value={time}
          onChange={this.handleChange}
        />
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

export default Request;
