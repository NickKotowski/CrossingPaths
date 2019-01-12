import React, {Component} from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Easing, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

import { setUsername, increaseCount } from '../store/actions';

import theme from '../theme';
import Home from "../screens/Home";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      layoutHeightOfLoginBox: new Animated.Value(123),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.layoutHeightOfLoginBox,
      {
        toValue: 280,
        easing: Easing.back(),
      },
    ).start();
  }

  getStyleForLoginButton = () => {
    if (this.state.text === '') {
      return styles.loginButtonInactive;
    }
    return styles.loginButtonActive;
  }

  onLogin = () => {
    if (this.state.text === '') {
      alert("Please write a user name. This is what other people will search for when trying to find you");
    } else {
      this.props.setUsername(this.state.text);
      this.props.navigation.navigate("You");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Animated.View
          style={[styles.wrapper, { height: this.state.layoutHeightOfLoginBox }]}
        >
          <Image source={require('../assets/logo_with_text.png')}/>
          <Text style={styles.label}>Select a user name</Text>
          <TextInput
             style={styles.textInput}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
             placeholder={'Write a user name'}
          />
          <TouchableOpacity
            style={[styles.loginButton, this.getStyleForLoginButton()]}
            onPress={this.onLogin}
          >
            <Text style={styles.loginButtonText}>Create Account</Text>
          </TouchableOpacity>
        </Animated.View>
        <Text style={styles.text}>
          Alpha Version - Created @ Hackathon Hub Hoi An (Vietnam) 2019
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

const LoginConnected = connect(state => (
  { app: state.app }), { setUsername, increaseCount })(Login);

export default LoginConnected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 12,
    color: theme.color.main,
    position: 'absolute',
    bottom: 20,
    width: '60%',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: theme.color.main,
    paddingTop: 40,
  },
  textInput: {
    borderBottomColor: theme.color.main,
    borderBottomWidth: 1,
    width: '60%',
    height: 40,
    margin: 0,
    padding: 0,
    paddingTop: 20,
  },
  loginButton: {
    marginTop: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  loginButtonActive: {
    backgroundColor: theme.color.main,
  },
  loginButtonInactive: {
    backgroundColor: theme.color.lightGray
  },
  loginButtonText: {
    color: 'white',
  }
});
