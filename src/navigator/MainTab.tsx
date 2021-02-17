import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { WriteStack } from './WriteStack';

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Write" component={WriteStack} />
    </Tab.Navigator>
  );
};
