import React, { Component } from 'react';
import '../styles/PastRides.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

class PastRides extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="scheduled-rides">
        <div className="current-ride-container">
          <div className="Airport">O'Hare</div>
          <div className="Date">10/20/18</div>
          <div className="Time">11:00 AM</div>
          <div className="Rider-container">
            Fellow Riders:
            <div className="rider-info">
              <FontAwesomeIcon icon="user" />
              <div className="riderName">Zack Aslan</div>
              <a className="rider-contact" href={`mailto:${'sinanaslan2020@u.northwestern.edu'}`}>
                Contact
              </a>
            </div>
            <div className="rider-info">
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
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PastRides;
