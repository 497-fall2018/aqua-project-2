import React, { Component } from 'react';
import '../styles/Main.css';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import { getUsersQuery, addRequest, getRequests } from '../queries/queries';
import UserDetails from '../Components/UserDetails'
import MatchedUser from '../Components/MatchedUser';
import Request from '../Components/Request';
import RequestSubmitted from '../Components/RequestSubmitted';

//     mutation {
//         addRequest(destination: "O'Hare", timeBuffer: 1111) {
//           destination
//           timeBuffer
//         }
//       }
// }`

const Requests = getRequests =>
  getRequests.data.loading ? (
    <div>loading</div>
  ) : (
    getRequests.data.requests.map(request => <li key={request.id}>{request.destination}</li>)
  );

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: '',
      timeBuffer: '',
      time: '',
      showRequest: false,
    };
  }

  onSubmitHandler = e => {
    console.log(e.target);
    this.setState({ showRequest: true });
    this.setState({ changeRequest: true });
    console.log(this.state.showRequest);
  };

  render() {
    const { getRequests } = this.props;
    return (
      <div className="main-body">
        <UserDetails />
        {/* SELECT Destination */}
        <div className="feed-container">
          {this.state.changeRequest ? (
            <RequestSubmitted />
          ) : (
            <Request onSubmitHandler={this.onSubmitHandler} />
          )}
          {this.state.showRequest ? (
            <div className="profiles">
              <MatchedUser
                showRequest={true}
                name="Daniel Kim"
                time="10:30AM"
                location="South Campus"
              />
              <MatchedUser
                showRequest={true}
                name="James Xie"
                time="10:25AM"
                location="North Campus"
              />
              <MatchedUser
                showRequest={true}
                name="Khalil Anderson"
                time="10:40AM"
                location="South Campus"
              />
              <MatchedUser
                showRequest={true}
                name="Tanya Kumbharageri"
                time="10:30AM"
                location="North Campus"
              />

              <MatchedUser
                showRequest={true}
                name="Professor Riesbeck"
                time="10:30AM"
                location="South Campus"
              />
              <MatchedUser
                showRequest={true}
                name="Morton Shapiro"
                time="10:30AM"
                location="North Campus"
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

// export default Main;
