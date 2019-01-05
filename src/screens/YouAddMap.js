import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

export class YouAddMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>ADD MAP SCREEN</Text>
      </View>
    );
  }
}

const YouAddMapConnected = connect(state => ({app: state}))(YouAddMap);

export default YouAddMapConnected;
