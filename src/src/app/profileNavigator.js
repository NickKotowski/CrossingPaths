import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/Home';
import CounterNavigator from './counterNavigator';

const AppNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    title: 'Home',
  },
  Counter: {
    screen: CounterNavigator,
  }
});

export default createAppContainer(AppNavigator);
