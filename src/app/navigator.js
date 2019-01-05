import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import NewLocation from '../screens/NewLocation';
import Home from '../screens/Home';
import YourPath from '../screens/YourPath';
import CounterNavigator from './counterNavigator';
import CrossingPaths from '../screens/CrossingPaths';

const AppNavigator = createBottomTabNavigator({
  Login: {
    screen: YourPath,
    title: 'You',
  },
  NewLocation: {
    screen: NewLocation,
    title: 'NewLocation',
  },
  Home: {
    screen: Home,
    title: 'Home',
  },
  CrossingPaths: {
    screen: CrossingPaths,
  }
});

export default createAppContainer(AppNavigator);
