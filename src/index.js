import React from 'react';
import ReactDOM from 'react-dom';
// apollo
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
// react-router
import { BrowserRouter } from 'react-router-dom';
// main
import App from './App';
import { UserProvider } from './context/UserContext';
import './index.css';
// util
// import reportWebVitals from './reportWebVitals';

// TODO: use process.env
const httpLink = createHttpLink({
  // uri: 'https://cryptic-harbor-64175.herokuapp.com/',
  uri: process.env.REACT_APP_GRAPHQL_SERVER,
});

// add jwtToken to request
const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
