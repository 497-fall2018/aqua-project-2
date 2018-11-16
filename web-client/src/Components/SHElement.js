import React, { Component } from 'react';
import '../styles/SHElement.css';

class SHElement extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  searchHandler(evt) {
    
  }

  render() {
    return (
      <div className="search-history-element">
        <button className="btn-sh-go"onClick={this.searchHandler}>
            <div className="route-entry">
                {this.props.location}{' '}-->{' '}{this.props.airport}</div>
            <div className="time-entry">
                {this.props.time}{' '}{this.props.date}</div></button>
      </div>
    );
  }
}

export default SHElement;
