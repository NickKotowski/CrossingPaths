import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import { increaseCount } from '../store/actions';

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
  }
})

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  count = () => {
    this.props.increaseCount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Test App</Text>
        <Text>{this.props.app.counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.count}
        >
          <Text>Add 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Counter', { id: 4 })}
        >
          <Text>I'm to lazy to go to the Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CounterScreen', { count: 400 })}
        >
          <Text>I'm to lazy to go to the Bottom</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeConnected = connect(state => ({ app: state }), {
  increaseCount,
})(Home);

export default HomeConnected;
