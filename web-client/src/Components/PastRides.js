import React, { Component } from 'react';
import '../styles/PastRides.css';

class PastRides extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="past-rides">
        <button className="btn-pr"/*  onClick={}*/>Past Rides</button> 
      </div>
    );
  }
}

export default PastRides;
