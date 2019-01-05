import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import Home from "../screens/Home";
import Login from "../screens/Login";

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
  }
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
