import React from 'react';
import { StatusBar } from 'react-native';
import styled from '@emotion/native';
import Home from './containers/Home';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const App = () => {
  const link = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      link,
      new HttpLink({ uri: 'http://localhost:4000/' }),
    ]),
  });
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Logo source={require('~/assets/images/logo.jpg')} />
        <LogoText source={require('~/assets/images/logo_text.jpg')} />
        <Home />
      </Container>
    </ApolloProvider>
  );
};

export default App;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const LogoText = styled.Image`
  width: 200px;
  height: 60px;
`;
