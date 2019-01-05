import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import firebase from 'react-native-firebase';

import { increaseCount } from '../store/actions';
import { Button, TextInput } from '../components';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTest: {
    height: 54,
    width: '100%',
    backgroundColor: theme.Color.Main,
  },

  txtTestButton: {
    color: theme.Color.White,
  }
})

export class Home extends Component {
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
      <View style={styles.container}>
        <Text>Welcome to the Test App</Text>
        <Text>Useless</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.setNewUser}
        >
          <Text>Add 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CounterScreen', { count: 400 })}
        >
          <Text>I'm to lazy to go to the Bottom</Text>
        </TouchableOpacity>

        <Button
          style={styles.btnTest}
          textStyle={styles.txtTestButton}
          text='Test'
        />

        <TextInput label="Name" placeholder="This is text input" />
      </View>
    );
  }
}

const HomeConnected = connect(state => ({ app: state }), {
  increaseCount,
})(Home);

export default HomeConnected;
