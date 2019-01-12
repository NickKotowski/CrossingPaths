import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import DatePicker from 'react-native-datepicker';

import theme from '../theme';

export class YouAddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      location: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.navigation) {
      if (nextProps.navigation.state.params === prevState.navigation.state.params) {
        return prevState;
      }
    } else {
      let newProps = {};
      if (nextProps.navigation.state.params) {
        newProps = {
          title: nextProps.navigation.state.params.title,
          location: nextProps.navigation.state.params.location
        };
      }
      return {
        ...prevState,
        ...newProps,
      };
    }
  }

  setComment = (comment) => {
    this.setState({ comment });
  }

  getCoordinates = () => {
    if (this.state.location) {
      return `${this.state.location.lat} / ${this.state.location.lng}`;
    } return null;
  }

  getTitle = () => {
    if (this.state.title) {
      return this.state.title;
    } return 'Choose a location and the title will appear here';
  }

  getLocation = () => {
    if (this.state.location) {
      return this.getCoordinates();
    } return 'Choose Location';
  }

  goToLocationScreen = () => {
    this.setState({ location: null });
    this.props.navigation.navigate('YouAddMap');
  }

  getTitleInput = () => (
    <View style={styles.marginBottom}>
      <Text style={styles.title}>Title:</Text>
      <Text style={[
        styles.title,
        styles.marginTop,
        (this.state.title)
          ? null
          : styles.placeholderText
      ]}>
        {this.getTitle()}
      </Text>
    </View>
  )

  getGeoLocation = () => (
    <View>
      <Text style={styles.title}>Location (Coordinates):</Text>
      <View style={[styles.marginTop, styles.marginBottom]}>
        <TouchableHighlight onPress={this.goToLocationScreen} style={styles.button}>
          <Text style={styles.buttonText}>{this.getLocation()}</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

  changeStartDate = (date) => {
    this.setState({ date });
  }

  getStartDate = () => (
    <View>
      <Text style={styles.title}>From:</Text>
      <View style={[styles.marginBottom, styles.marginTop, styles.marginLeft]}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.startDate}
          mode="date"
          placeholder="Select Date"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2099-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(date) => this.setState({ startDate: date })}
          customStyles={{
            dateInput: {
              backgroundColor: theme.color.main,
              borderColor: 'white',
              borderRadius: 20,
            },
            dateText: {
              color: 'white',
            },
            placeholderText: {
              color: 'white'
            }
            // ... You can check the source to find the other keys.
          }}
        />
      </View>
    </View>
  )

  getEndDate = () => (
    <View>
      <Text style={styles.title}>To:</Text>
      <View style={[styles.marginBottom, styles.marginTop, styles.marginLeft]}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.endDate}
          mode="date"
          placeholder="Select Date"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2099-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(date) => this.setState({ endDate: date })}
          customStyles={{
            dateInput: {
              backgroundColor: theme.color.main,
              borderColor: 'white',
              borderRadius: 20,
            },
            dateText: {
              color: 'white',
            },
            placeholderText: {
              color: 'white'
            }
            // ... You can check the source to find the other keys.
          }}
        />
      </View>
    </View>
  )

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
            {this.getGeoLocation()}
            {this.getTitleInput()}
            {this.getStartDate()}
            {this.getEndDate()}
            {this.getCommentInput()}
          </View>
          <View style={{ height: 300}} />
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
  button: {
    backgroundColor: theme.color.main,
    width: 200,
    borderRadius: 40,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    flex: 1,
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
  },
  marginTop: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10
  },
  marginLeft: {
    marginLeft: 10
  },
  placeholderText: {
    fontStyle: 'italic',
    fontSize: 12,
  }
});

const YouAddLocationConnected = connect(state => ({ app: state }))(
  YouAddLocation
);

export default YouAddLocationConnected;
