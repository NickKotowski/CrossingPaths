import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,
  KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import { increaseCount } from '../store/actions';
import { Button, TextInput, DatePicker } from '../components';
import theme from '../theme';

export default class NewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      startDate: '',
      endDate: '',
      location: '',
      comment:'',
    };

    this._onTitleChange = this._onTitleChange.bind(this);
    this._onCommentChange = this._onCommentChange.bind(this);
    this._onStartChange = this._onStartChange.bind(this);
    this._onEndChange = this._onEndChange.bind(this);
    this._onAddLocation = this._onAddLocation.bind(this);
    this._onPressSaveButton = this._onPressSaveButton.bind(this);
  }

  componentDidMount() {

  }

  _onTitleChange(title) {
    this.setState({
      title,
    });
  }

  _onCommentChange(comment) {
    this.setState({
      comment,
    });
  }

  _onAddLocation(location) {
    this.setState({
      location,
    });
  }

  _onStartChange(startDate) {
    this.setState({
      startDate,
    });
  }

  _onEndChange(endDate) {
    this.setState({
      endDate,
    });
  }

  _onPressSaveButton() {
    const { title, location, comment, startDate, endDate } = this.state;
    // TODO: store.dispatch action send data
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} keyboardVerticalOffset={10}>
        <TextInput
          style={styles.input}
          label="Title"
          placeholder="Enter your title"
          onChangeText={this._onTitleChange}
          onSubmitEditing={Keyboard.dismiss}
          returnKeyType='done'
        />

        <DatePicker
          style={styles.input}
          label="From"
          onDateChange={this._onStartChange}
        />

        <DatePicker
          style={styles.input}
          label="To"
          onDateChange={this._onEndChange}
        />

        <TextInput
          style={styles.input}
          label="Location"
          placeholder="Enter your location"
          returnKeyType='done'
          onChangeText={this._onAddLocation}
        />

        <TextInput
          style={styles.input}
          label="Comment"
          placeholder="Enter your comment"
          multiline
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={this._onCommentChange}
        />

        <Button
          style={styles.btnAdd}
          textStyle={styles.txtAddButton}
          text='Save location'
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

  btnAdd: {
    height: 54,
    width: '95%',
    marginVertical: 20,
    backgroundColor: theme.color.main,
    borderRadius: 8,
    position: 'absolute',
    bottom: 4,
  },

  txtAddButton: {
    color: theme.color.white,
    fontWeight: 'bold',
  },

  input: {
    padding: 15,
  },
})
