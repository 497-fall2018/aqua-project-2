import React from 'react';
import { Query } from 'react-apollo';
import { getRequests } from './queries/queries';

const Rides = () => (
  <Query query={getRequests}>
    {({ loading, error, data }) => {
      if (loading) return <div>loading...</div>;
      if (error) return <div>error :(</div>;
      console.log(data.requests[0]);
      data.requests.map(request => <div>{request.location_end}</div>);
    }}
  </Query>
);

export default Rides;
