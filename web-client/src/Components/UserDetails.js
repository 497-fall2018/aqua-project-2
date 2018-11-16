import React, { Component } from 'react';
import PastRides from './PastRides';
import '../styles/UserDetails.css';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import SearchHistory from './SearchHistory';
import ScheduledRides from './ScheduledRides';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import SHElement from './SHElement';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = {
      showPastRides: true,
    };
  }

  handleData(data) {
    this.setState({
      showPastRides: data,
    });
  }

  render() {
    return (
      <div className="userdetails-container">
        {this.state.showPastRides ? (
          <div>
            <UserProfile handlerFromParant={this.handleData} />
            {/* <div className="rides">
          <header>
            <h4>
            <em><strong>Scheduled Rides</strong></em>
            </h4>
          </header>
              <ScheduledRides/>
              <PastRides/>
          </div>
          <div className = 'search-history'>
            <SearchHistory/>
          </div> */}
            <div>
              <div className="rides">
                <Accordion atomic>
                  <AccordionItem title="Scheduled Rides">
                    <ScheduledRides />
                  </AccordionItem>

                  <AccordionItem title="Past Rides">
                    <PastRides />
                  </AccordionItem>
                  
                  <AccordionItem title="Search History">
                    <SHElement
                      airport="O'Hare International Airport"
                      time="10:30AM"
                      date="Date"
                      location="South Campus"
                    />
                    <SHElement
                      airport="Midway International Airport"
                      time="10:40AM"
                      date="Date"
                      location="North Campus"
                    />
                    <SHElement
                      airport="O'Hare International Airport"
                      time="10:30AM"
                      date="Date"
                      location="South Campus"
                    />
                    <SHElement
                      airport="O'Hare International Airport"
                      time="10:30AM"
                      date="Date"
                      location="South Campus"
                    />
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          <EditProfile handlerFromParant={this.handleData} />
        )}
      </div>
    );
  }
}

export default UserDetails;
