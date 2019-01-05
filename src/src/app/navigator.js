import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/Home';
import CounterNavigator from './counterNavigator';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    title: 'Home',
  },
  Counter: {
    screen: CounterNavigator,
  }
});

export default createAppContainer(AppNavigator);
