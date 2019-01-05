import React, {Component, Fragment} from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";
//import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {label, labelStyle, inputStyle, ...more} = this.props;
    return (
      <Fragment>
        {label && <Text style={labelStyle}>{label}</Text>}
        <TextInput style={inputStyle} {...more} />
      </Fragment>
    );
  }
}

const style = StyleSheet.create({
  txtLabel: {
    fontSize: 18,
    fontStyle: "italic"
  },

  input: {
    fontStyle: "italic"
  }
});
