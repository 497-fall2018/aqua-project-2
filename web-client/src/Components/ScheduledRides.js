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
        <div className="current-ride-container">
          <div className="Airport">O'Hare</div>
          <div className="Date">03/02/19</div>
          <div className="Time">10:30 AM</div>
          <div className="Rider-container">
            Fellow Riders:
            <div className="rider-info">
              <FontAwesomeIcon icon="user" />
              <div className="riderName">Zack Aslan</div>
              <a className="rider-contact" href={`mailto:${'sinanaslan2020@u.northwestern.edu'}`}>
                Contact
              </a>
            </div>
            {/* <div className="rider-info">
              <FontAwesomeIcon icon="user" />
              <div className="riderName">Khalil Anderson</div>
              <a
                className="rider-contact"
                href={`mailto:${'khalilanderson2023@u.northwestern.edu'}`}
              >
                Contact
              </a>
            </div>
            <div className="rider-info">
              <FontAwesomeIcon icon="user" />
              <div className="riderName">James Xie</div>
              <a className="rider-contact" href={`mailto:${'JamesXie2019@u.northwestern.edu'}`}>
                Contact
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduledRides;
