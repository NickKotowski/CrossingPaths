import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import DatePicker from 'react-native-datepicker';

import theme from '../theme';

export class YouAddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  setTitle = (title) => {
    this.setState({ title });
  }

  setComment = (comment) => {
    this.setState({ comment });
  }

  getTitleInput = () => (
    <View>
      <Text style={styles.title}>Title:</Text>
      <TextInput
        onChange={(title) => this.setState({ title })}
        value={this.state.title}
        placeholder={'What do you want to call this?'}
        underlineColorAndroid={false}
        style={styles.textInput}
        multiline = {true}
      />
    </View>
  )

  getDate = () => {
    return 'dd';
  }

  changeStartDate = (date) => {
    this.setState({ date: date });
  }

  getStartDate = () => (
    <View>
      <Text style={styles.title}>From:</Text>
      <View style={{ marginLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.startDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2099-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(date) => this.setState({ startDate: date })}
        />
      </View>
    </View>
  )

  getEndDate = () => (
    <View>
      <Text style={styles.title}>To:</Text>
      <View style={{ marginLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.endDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2099-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(date) => this.setState({ endDate: date })}
        />
      </View>
    </View>
  )

  getGeoLocation = () => {
    return (
      null
    )
  }

  getCommentInput = () => (
    <View>
      <Text style={styles.title}>Comment:</Text>
      <TextInput
        onChange={(comment) => this.setState({ comment })}
        value={this.state.comment}
        placeholder={'What are you planning on doing?'}
        underlineColorAndroid={false}
        style={styles.textInput}
        multiline = {true}
      />
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            {this.getTitleInput()}
            {this.getStartDate()}
            {this.getEndDate()}
            {this.getGeoLocation()}
            {this.getCommentInput()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
  },
  container: {
    width: "100%"
  },
  title: {
    color: theme.color.font,
    fontSize: 16,
    marginLeft: 10,
  },
  textInput: {
    borderBottomColor: theme.color.main,
    borderBottomWidth: 1,
    margin: 10,
  },
  resetMargin: {
    marginLeft: 0,
  }
});

const YouAddLocationConnected = connect(state => ({ app: state }))(
  YouAddLocation
);

export default YouAddLocationConnected;
