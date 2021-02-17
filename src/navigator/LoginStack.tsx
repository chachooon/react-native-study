import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '~/screens/Login';

const Stack = createStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
