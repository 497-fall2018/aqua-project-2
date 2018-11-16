import React, { Component } from 'react';
import '../styles/Main.css';
import { gql } from 'apollo-boost';
import { graphql, compose, Query } from 'react-apollo';
import { getUsersQuery, addRequest, getRequests, getMatches } from '../queries/queries';

import UserDetails from '../Components/UserDetails';
import MatchedUser from '../Components/MatchedUser';
import Request from '../Components/Request';
import RequestSubmitted from '../Components/RequestSubmitted';
import Rides from '../Rides';
import PostRequest from '../Components/PostRequest';

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

const GetMatchesQuery = variables => (
  <Query query={getMatches} variables={variables.variables}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      console.log(variables);
      console.log(data);
      return data.getMatches.map(match => {
        return <div>{match.location_end}</div>;

        // <MatchedUser
        // showRequest={true}
        // name={match}
        // time="10:30AM"
        // location="South Campus"
        // airport="O'Hare International Airport"
        // recipient="jamesxie2019"
        // user="jamesxie2019"/>;
      });
    }}
  </Query>
);

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: '',
      date: '',

      time_buffer: 0,
      time: '',
      showRequest: false,
      userName: 'Willie Wildcat',
      user: 'jamesxie2019',
      location_end: 'default',
      date: 'default',
      time_departure: 'default',
      location_start: 'default',
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  // getMatchesQuery() {
  //   const { date, location_end, time_departure, location_start, time_buffer } = this.state;
  //   let variables = {
  //     date: date,
  //     time_buffer: time_buffer,
  //     location_start: location_start,
  //     location_end: location_end,
  //     time_departure: time_departure,
  //   };

  //   console.log(variables);
  //   return (
  //     <Query query={getMatches} variables={variables}>
  //       {' '}
  //       {({ loading, error, data }) => {
  //         if (loading) return null;
  //         if (error) return `Error!: ${error}`;
  //         console.log(data)
  //         return data;
  //       }}
  //     </Query>
  //   );
  // }

  onSubmitHandler = e => {
    const { addRequest, getMatches } = this.props;
    const { date, location_end, time_departure, location_start, time_buffer } = this.state;
    e.preventDefault();
    console.log(e);

    //this is the problem below
    // addRequest({
    //   variables: {
    //     date: date,
    //     time_buffer: time_buffer,
    //     location_start: location_start,
    //     location_end: location_end,
    //     time_departure: time_departure,
    //   },
    // });
    // .then(getRequests.refetch());
    // console.log(e.target);
    this.setState({ showRequest: true });
    this.setState({ changeRequest: true });
    console.log(this.state.showRequest);
  };

  render() {
    const { getRequests } = this.props;
    const { date, location_end, time_departure, location_start, time_buffer } = this.state;
    let variables = {
      date: date,
      time_buffer: time_buffer,
      location_start: location_start,
      location_end: location_end,
      time_departure: time_departure,
    };
    return (
      <div className="main-body">
        {console.log(variables)}

        {/* {this.state.showRequest ? <GetMatchesQuery variables={variables} /> : null} */}

        {/* <Rides /> */}
        {/* <Requests requests={getRequests} />
        {console.log(getRequests.loading)} */}
        <UserDetails />

        {/* SELECT Destination */}
        <div className="feed-container">
          {this.state.changeRequest ? (
            <RequestSubmitted />
          ) : (
            <Request handleChange={this.handleChange} onSubmitHandler={this.onSubmitHandler} />
          )}
          {this.state.showRequest ? (
            <div className="profiles">
              <GetMatchesQuery variables={variables} />
              {/* <MatchedUser
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
              /> */}
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
      </div>
    );
  }
}

export default compose(
  graphql(getMatches, { name: 'getMatches' }),
  graphql(getUsersQuery, { name: 'getUsersQuery' }),
  graphql(addRequest, { name: 'addRequest' }),
  graphql(getRequests, { name: 'getRequests' })
)(Main);
