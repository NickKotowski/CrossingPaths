import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import YourPath from '../screens/YourPath';
import CounterNavigator from './counterNavigator';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: YourPath,
    title: 'Home',
  },
  Counter: {
    screen: CounterNavigator,
  }
});

export default createAppContainer(AppNavigator);
