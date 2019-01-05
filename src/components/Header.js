import React, {Component, Fragment} from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, labelStyle, inputStyle, ...more} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnLeft}>
          <Image />
        </TouchableOpacity>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.btnRight} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between"
  },

  btnLeft: {},

  txtTitle: {}
});
