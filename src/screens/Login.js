import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

import Home from "../screens/Home";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Hello</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const LoginConnected = connect(state => ({app: state}))(Login);

export default LoginConnected;
