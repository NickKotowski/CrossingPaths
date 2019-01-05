import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

export class FollowFind extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>FIND A FRIEND</Text>
      </View>
    );
  }
}

const FollowFindConnected = connect(state => ({app: state}))(FollowFind);

export default FollowFindConnected;
