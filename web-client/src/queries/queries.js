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
  mutation($destination: String!, $time_buffer: Int!) {
    addRequest(
      destination: $destination
      time_buffer: $time_buffer
      location_start: $location_start
      location_end: $location_end
    ) {
      destination
      time_buffer
    }
  }
`;

const getRequests = gql`
  {
    requests(id: 1) {
      request_id
      destination
      time_buffer
    }
  }
`;

export { getUsersQuery, addRequest, getRequests };
