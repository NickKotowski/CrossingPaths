import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";
import { Animated, Easing, Image, StyleSheet } from 'react-native';

import theme from '../theme';

import LaunchScreen from '../screens/LaunchScreen';
import Login from '../screens/Login';
// import NewLocation from '../screens/NewLocation';
import Home from '../screens/Home';
// import YourPath from '../screens/YourPath';
// import CrossingPaths from '../screens/CrossingPaths';
import YourPathNavigator from './YourPathNavigator';

const styles = StyleSheet.create({
  tabbarIcon: {
    width: 20,
    height: 20,
  },
});

const AppStack = createBottomTabNavigator({
  YourPath: {
    screen: YourPathNavigator,
    navigationOptions: {
      tabBarLabel: 'Your Path',
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image source={require('../assets/your_path_active.png')} style={styles.tabbarIcon} />
        : <Image source={require('../assets/your_path_inactive.png')} style={styles.tabbarIcon} />
      ),
    }
  },
  CrossingPaths: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Crossing Paths',
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image source={require('../assets/crossing_path_active.png')} style={styles.tabbarIcon} />
        : <Image source={require('../assets/crossing_path_inactive.png')} style={styles.tabbarIcon} />
      ),
    }
  },
  FollowingPaths: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Following Paths',
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image source={require('../assets/following_path_active.png')} style={styles.tabbarIcon} />
        : <Image source={require('../assets/following_path_inactive.png')} style={styles.tabbarIcon} />
      ),
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: theme.color.main,
    inactiveTintColor: theme.color.lightGray,

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
