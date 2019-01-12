import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Animated, Easing } from 'react-native';

import LaunchScreen from '../screens/LaunchScreen';
import Login from '../screens/Login';
// import NewLocation from '../screens/NewLocation';
import Home from '../screens/Home';
// import YourPath from '../screens/YourPath';
// import CrossingPaths from '../screens/CrossingPaths';

const AppStack = createBottomTabNavigator({
  You: {
    screen: Home,
  },
});

const AppNavigator = createStackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen,
      navigationOptions: {
        header: null,
      },
    },
    Auth: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    App: {
      screen: AppStack,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'LaunchScreen',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  }
);

export default createAppContainer(AppNavigator);
