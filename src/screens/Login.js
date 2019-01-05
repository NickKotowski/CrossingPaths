import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

import Home from "../screens/Home";

<<<<<<< HEAD
export class Login extends Component {
=======
export default class Login extends Component {
>>>>>>> feature/final_changes
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

<<<<<<< HEAD
const LoginConnected = connect(state => ({app: state}))(Login);

export default LoginConnected;
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnLogin: {
    height: 54,
    width: '95%',
    marginVertical: 20,
    backgroundColor: theme.Color.Main,
    borderRadius: 8,
  },

  txtLoginButton: {
    color: theme.Color.White,
    fontWeight: 'bold',
  },

  input: {
    padding: 15,
  },
})
>>>>>>> feature/final_changes
