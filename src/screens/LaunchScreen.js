import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import theme from '../theme';

export class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(this.navigateToNextScreen, 10);
  }

  navigateToNextScreen = () => {
    if (this.props.app.userName !== '') {
      this.props.navigation.navigate('YourPath');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.wrapper}
        >
          <Image source={require('../assets/logo_with_text.png')}/>
        </View>
        <Text style={styles.text}>
          Alpha Version - Created @ Hackathon Hub Hoi An (Vietnam) 2019
        </Text>
      </View>
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
  wrapper: {
    width: 200,
    height: 100,
    justifyContent: 'center',
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
});

const LaunchScreenConnected = connect(state => (
  { app: state }))(LaunchScreen);

export default LaunchScreenConnected;
