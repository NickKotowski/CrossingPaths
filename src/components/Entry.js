import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from'react-native';

export default class Entry extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { data, ...more } = this.props;
        return (
          <View style={styles.item}>
            <View style={styles.title}>
              <Text style={styles.name}>{data.name}</Text>
              <View style={styles.row}>
                <Text style={styles.number}>{data.lang.toString() + ', '}</Text>
                <Text style={styles.number}>{data.lat.toString()}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.number}>{data.from+ ' - '}</Text>
              <Text style={styles.number}>{data.to}</Text>
            </View>
            <Text style={styles.description}>{data.description}</Text>
            <View style={styles.buttons}>

            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 30
  },
  showWith: {
    fontStyle: 'italic',
    fontSize: 14
  },
  followBy: {
    fontStyle: 'italic',
    fontSize: 14
  },
  item: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    marginTop: 10,
    elevation: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,

  },
  name: {
    fontWeight: 'bold',
    fontSize: 20
  },
  row: {
    flexDirection: 'row',
  },
  number: {
    fontStyle: 'italic',
    fontSize: 16
  },
  description: {
    fontSize: 16,
    marginTop: 3
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  buttonLabel: {
    fontSize: 15
  }
})
