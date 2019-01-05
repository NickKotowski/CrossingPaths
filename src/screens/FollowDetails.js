import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

export class FollowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>FRIEND DETAILS</Text>
      </View>
    );
  }
}

const FollowDetailsConnected = connect(state => ({app: state}))(FollowDetails);

export default FollowDetailsConnected;
