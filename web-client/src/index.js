import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Landing from './Pages/Landing';
import registerServiceWorker from './registerServiceWorker';
import history from './history';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Switch>
        <Route path="/main" render={(props) => <Main />} />
        <Route path="/" render={(props) => <Landing />} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
