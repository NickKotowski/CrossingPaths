import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import NewLocation from '../screens/NewLocation';
import Home from '../screens/Home';
import CounterNavigator from './counterNavigator';

const AppNavigator = createBottomTabNavigator({
  Login: {
    screen: Login,
    title: 'Login',
  },
  NewLocation: {
    screen: NewLocation,
    title: 'NewLocation',
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
