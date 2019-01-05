import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import firebase from 'react-native-firebase';

import { increaseCount } from '../store/actions';
import { Button, TextInput } from '../components';
import theme from '../theme';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // this.listUsers();
    // console.log("Hello");
  }

  count = () => {
    this.props.increaseCount();
  }

  retrieveData = () => {
    const value = "nick";
    return value;
  }

  // setNewUser = () => {
  //   const ref = firebase.firestore().collection('users');
  //   ref.add({name: 'Nick'}).then((doc) => {
  //     if (doc.id) {
  //       // console.log(doc.id);
  //       return doc.id;
  //     } else {
  //       console.log("It did write, but uuid is empty. Which is fucking weird.")
  //       //throw error that it did not go too well
  //     }
  //   })
  //   .then((id) => console.log(id))
  //   .catch((e) => console.log(e));
  // }
  //
  // listUsers = () => {
  //   console.log("Show me users bitch");
  //   firebase.firestore().collection('users')
  //   .get()
  //   .then(snapshot => {
  //     snapshot
  //       .docs
  //       .forEach(doc => {
  //         console.log(doc);
  //         console.log(doc._data.name)
  //       });
  //   }).
  //   catch((e) => console.log(e));
  // }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.input}
          label="Username"
          placeholder="Enter your username"
        />
        <TextInput
          style={styles.input}
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />
        <Button
          style={styles.btnLogin}
          textStyle={styles.txtLoginButton}
          text='Login'
        />
      </KeyboardAvoidingView>
    );
  }
}

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
