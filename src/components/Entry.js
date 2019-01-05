import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
})

export class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stay: [],
    };
  }



  render() {
    return (
      <View>
        <Text>Try</Text>
      </View>
    );
  }
}

export default Entry;
