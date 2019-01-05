import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

import FollowFind from "../screens/FollowFind";
import FollowDetails from "../screens/FollowDetails";

export class FollowOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>FOLLOWING LIST</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("FollowFind")}
        >
          <Text>FIND</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("FollowDetails")}
        >
          <Text>FRIEND's DETAIL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const FollowOverviewConnected = connect(state => ({app: state}))(
  FollowOverview
);

export default FollowOverviewConnected;
