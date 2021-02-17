import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WriteScreen } from '~/screens/Write';

const Stack = createStackNavigator();

export const WriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
};
