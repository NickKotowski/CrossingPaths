import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase';

import { increaseCount } from '../store/actions';

export class YourPath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stay: [],
    };
  }

  componentDidMount() {
    this.getStays();
  }

  getStays = () => {
    console.log("Show me users bitch");
    firebase.firestore().collection('stays')
    .get()
    .then(snapshot => {
      let allStays = [];
      snapshot.docs.forEach(doc => {
        allStays.push(doc._data)
      });
      this.setState({ stay: allStays }, () => console.log(this.state))
    }).
    catch((e) => console.log(e));
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}

export default YourPath;
