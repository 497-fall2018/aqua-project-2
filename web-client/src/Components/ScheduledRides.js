import React, { Component } from 'react';
import '../styles/ScheduledRides.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);


class ScheduledRides extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="scheduled-rides">
          <div className = 'current-ride-container'>
            <div className = 'Airport'>
               O'Hare
            </div>
            <div className = 'Date'>
              11/08/18
            </div>
            <div className = 'Time'>
              10:40 AM
            </div>
            <div className = 'Rider-container'>
              Fellow Riders:
              <div className = 'rider-info'>
                <FontAwesomeIcon icon="user" />
                <div className = 'riderName'>
                  Daniel Kim
                </div>
                <button className='rider-contact'>Contact</button>
              </div>
              <div className = 'rider-info'>
                <FontAwesomeIcon icon="user" />
                <div className = 'riderName'>
                  Khalil Anderson
                </div>
                <button className='rider-contact'>Contact</button>
              </div>
              <div className = 'rider-info'>
                <FontAwesomeIcon icon="user" />
                <div className = 'riderName'>
                  James Xie
                </div>
                <button className='rider-contact'>Contact</button>
              </div>
            </div>
              
              
           
      </div>
    </div>
    );
  }
}

export default ScheduledRides;
