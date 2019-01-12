import React, {Component} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import firebase from "react-native-firebase";

import { Button, TextInput } from "../components";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const all = this.props;
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text> Crossing Paths List</Text>
        <TouchableOpacity
          onPress={() => this.props.increaseCount()}
        >
          <Text>Count</Text>
        </TouchableOpacity>
        <Text>{this.props.app.counter}</Text>
      </View>
    );
  }
}

const HomeConnected = connect(
  state => ({ app: state }))(Home);

export default HomeConnected;
