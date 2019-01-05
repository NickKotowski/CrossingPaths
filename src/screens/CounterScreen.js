import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export class CounterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: true,
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.navigation.state.params.count}</Text>
      </View>
    );
  }
}

export default CounterScreen;
