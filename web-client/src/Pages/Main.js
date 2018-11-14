import React, { Component } from 'react';
import '../styles/Main.css';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import { getUsersQuery, addRequest, getRequests } from '../queries/queries';

import UserDetails from '../Components/UserDetails';
import MatchedUser from '../Components/MatchedUser';
import Request from '../Components/Request';
import RequestSubmitted from '../Components/RequestSubmitted';
import PostRequest from '../Components/PostRequest';

//     mutation {
//         addRequest(destination: "O'Hare", timeBuffer: 1111) {
//           destination
//           timeBuffer
//         }
//       }
// }`

const Requests = requests => {
  console.log(requests);
  return requests.requests.loading ? (
    <div>loading</div>
  ) : (
    // <div>hello</div>
    requests.requests.requests.map(request => (
      <li key={request.id}>
        {request.time_buffer} {request.location_start} {request.location_end}
      </li>
    ))
  );
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // destination: '',
      // timeBuffer: '',
      // time: '',
      showRequest: false,
      userName: "Willie Wildcat",
      user: 'jamesxie2019',
      location_end: "default",
      date: "default",
      time_departure: "default",
      location_start: "default",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  onSubmitHandler = e => {
    const { addRequest, getRequests } = this.props;
    const { date, location_end, time_departure, location_start } = this.state;
    const time_buffer = 10;
    e.preventDefault();
    console.log(e);
    console.log(addRequest);

    //this is the problem below
    addRequest({
      variables: {
        date: date,
        time_buffer: time_buffer,
        location_start: location_start,
        location_end: location_end,
        time_departure: time_departure,
      },
    });
    // .then(getRequests.refetch());
    // console.log(e.target);
    this.setState({ showRequest: true });
    this.setState({ changeRequest: true });
    console.log(this.state.showRequest);
  };

  render() {
    const { getRequests } = this.props;
    return (
      <div className="main-body">
        {/* <Requests requests={getRequests} />
        {console.log(getRequests.loading)} */}
          <UserDetails />

        {/* SELECT Destination */}
        <div className="feed-container">
          {this.state.changeRequest ? (
            <RequestSubmitted />
          ) : (
            <Request 
              handleChange={this.handleChange} 
              onSubmitHandler={this.onSubmitHandler} />
          )}
          {this.state.showRequest ? (
            <div className="profiles">
              <MatchedUser
                showRequest={true}
                name="Daniel Kim"
                time="10:30AM"
                location="South Campus"
                airport="O'Hare International Airport"
                recipient="jamesxie2019"
                user={this.state.user}
              />
              <MatchedUser
                showRequest={true}
                name="James Xie"
                time="10:25AM"
                location="North Campus"
                airport="O'Hare International Airport"
                recipient="danielkim2020"
                user={this.state.user}
              />
              <MatchedUser
                showRequest={true}
                name="Khalil Anderson"
                time="10:40AM"
                location="South Campus"
                airport="O'Hare International Airport"
                recipient="khanders"
                user={this.state.user}
              />
              <MatchedUser
                showRequest={true}
                name="Tanya Kumbharageri"
                time="10:30AM"
                location="North Campus"
                airport="O'Hare International Airport"
                recipient="saikumbharageri2020"
                user={this.state.user}
              />

              <MatchedUser
                showRequest={true}
                name="Professor Riesbeck"
                time="10:30AM"
                location="South Campus"
                airport="O'Hare International Airport"
                recipient="khanders"
                user={this.state.user}
              />
              <MatchedUser
                showRequest={true}
                name="Morton Shapiro"
                time="10:30AM"
                location="North Campus"
                airport="O'Hare International Airport"
                recipient="khanders"
                user={this.state.user}
              />
              <PostRequest
                name={this.state.userName}
                airport={this.state.location_end}
                date={this.state.date}
                time={this.state.time_departure}
                location={this.state.location_start}
                recipient="khanders"
                user={this.state.user}
              />
            </div>
          ) : null}
        </div>

        {/* <div className="time-inputs">
          <input
            type="number"
            min="1"
            max="9"
            value={digits[0]}
             name={0}
            onChange={this.handleTimeChange}
          />
          <input
            type="number"
            min="0"
            max="9"
            value={digits[1]}
            name={1}
            onChange={this.handleTimeChange}
          />
          <input
            type="number"
            min="0"
            max="9"
            value={digits[2]}
            name={2}
            onChange={this.handleTimeChange}
          />
          <select>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div> */}

        {/* SELECT time Buffer */}
        {/* <select name="timeBuffer" onChange={this.handleChange}>
          <option value=></option>
        </select> */}

        {/*
        <input
          value={timeBuffer}
          name="timeBuffer"
          onChange={this.handleChange}
          placeholder="How long are you willing to wait?"
          description="Time Buffer"
          type="text"
        />
        <button type="submit" onClick={this.handleSubmit}>
          {' '}
          Submit!{' '}
        </button>

        <ul>
          <Requests data={getRequests} />
        </ul> */}
      </div>
    );
  }
}

export default compose(
  graphql(getUsersQuery, { name: 'getUsersQuery' }),
  graphql(addRequest, { name: 'addRequest' }),
  graphql(getRequests, { name: 'getRequests' })
)(Main);
