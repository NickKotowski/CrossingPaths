import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import Home from '../screens/Home';
import YourPath from '../screens/YourPath';
import CounterNavigator from './counterNavigator';

const AppNavigator = createBottomTabNavigator({
  Login: {
    screen: YourPath,
    title: 'You',
  },
  Home: {
    screen: Home,
    title: 'Home',
  },
  Counter: {
    screen: CounterNavigator,
  }
});

export default createAppContainer(AppNavigator);
