import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import Login from '../screens/Login';
import NewLocation from '../screens/NewLocation';
import Home from '../screens/Home';
import YourPath from '../screens/YourPath';
import CounterNavigator from './counterNavigator';
import CrossingPaths from '../screens/CrossingPaths';

import CounterNavigator from "./counterNavigator";
import YouNavigator from "./youNavigator";
import FollowNavigator from "./followNavigator";

const AppStack = createBottomTabNavigator({
  You: {
    screen: YouNavigator
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Crossing Paths"
    }
  },
  Following: {
    screen: FollowNavigator
  },
  CrossingPaths: {
    screen: CrossingPaths,
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login

  }
});

export default createAppContainer(
  createStackNavigator(
    {
      App: {
        screen: AppStack,
        navigationOptions: {
          header: null
        }
      },
      Auth: {
        screen: AuthStack,
        navigationOptions: {
          header: null
        }
      }
    },
    {
      initialRouteName: "Auth"
    }
  )
);
/*
Stacknavigator

Login
App
	TabNavigator
		Your
			Stacknavigator
				Overview
				AddNewJourney
				AddLocation

		CrossingPaths
		Follower
			Stacknavigator
			FollowerOverview
			FollowerFind
			FollowerDetail

      */
