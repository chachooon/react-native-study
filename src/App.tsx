import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStack } from './navigator/LoginStack';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, isLoggedInVar } from './apollo';
import { MainTab } from './navigator/MainTab';

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <MainTab /> : <LoginStack />}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
