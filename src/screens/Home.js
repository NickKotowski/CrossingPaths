import React, {Component} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import firebase from "react-native-firebase";

import {increaseCount} from "../store/actions";
import {Button, TextInput} from "../components";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text> Crossing Paths List</Text>
      </View>
    );
  }
}

const HomeConnected = connect(
  state => ({app: state}),
  {
    increaseCount
  }
)(Home);

export default HomeConnected;
