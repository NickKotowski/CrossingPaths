import React, {Component} from "react";
import {View, Text, TouchableOpacity, Button} from "react-native";
import {connect} from "react-redux";

import YouAddLocation from "../screens/YouAddLocation";

export class YouOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>YOUR PATH</Text>

        <Button
          title="ADD LOCATION"
          onPress={() => this.props.navigation.navigate("YouAddLocation")}
        />
      </View>
    );
  }
}

const YouOverviewConnected = connect(state => ({app: state}))(YouOverview);

export default YouOverviewConnected;
