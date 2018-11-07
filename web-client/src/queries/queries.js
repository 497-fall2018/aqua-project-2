import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUsersQuery = gql`
  {
    user(id: 1) {
      name
    }
  }
`;

const addRequest = gql`
  mutation(
    $date: String!
    $time_buffer: Int!
    $location_start: String!
    $location_end: String!
    $time_departure: String!
  ) {
    addRequest(
      date: $date
      time_buffer: $time_buffer
      location_start: $location_start
      location_end: $location_end
      time_departure: $time_departure
    ) {
      time_buffer
    }
  }
`;

const getRequests = gql`
  query {
    requests(id: 1) {
      request_id
      location_start
      location_end
      time_buffer
    }
  }
`;

export { getUsersQuery, addRequest, getRequests };
