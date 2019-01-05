import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import {connect} from "react-redux";

import YouAddMap from "../screens/YouAddMap";

export class YouAddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>NEW LOCATION</Text>
        <Button
          title="ADD MAP"
          onPress={() => this.props.navigation.navigate("YouAddMap")}
        />
      </View>
    );
  }
}

const YouAddLocationConnected = connect(state => ({app: state}))(
  YouAddLocation
);

export default YouAddLocationConnected;
