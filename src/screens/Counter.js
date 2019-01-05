import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'Nick',
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CounterScreen', { count: 4 })}
        >
          <Text>I'm to lazy to go to the Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CounterScreen', { count: 20 })}
        >
          <Text>I'm to lazy to go to the Bottom</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const CounterConnected = connect(state => ({ app: state }))(Counter);

export default CounterConnected;
