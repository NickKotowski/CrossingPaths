import React, {Component} from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, TouchableHighlight, Image, Dimensions } from "react-native";
import {connect} from "react-redux";

import Entry from '../components/PathEntry';

import theme from '../theme';

import YouAddLocation from "../screens/YouAddLocation";

const { width } = Dimensions.get('window');

export class YourPathOverview extends Component {
  places = [
    {
      id: '1',
      name: 'Hoi An',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }, {
      id: '3',
      name: 'Ko Lanta, Thailand',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }, {
      id: '3',
      name: 'Ko Lanta, Thailand',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }, {
      id: '3',
      name: 'Ko Lanta, Thailand',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }, {
      id: '3',
      name: 'Ko Lanta, Thailand',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }, {
      id: '3',
      name: 'Ko Lanta, Thailand',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }, {
      id: '3',
      name: 'Ko Lanta, Thailand',
      from: '1.12.2019',
      to: '3.12.2019',
      lang: '12.4314',
      lat: '103.514',
      description: 'Mainly working from Hub Hoi An, but want to do some trip during weekends. I heard My Son and Ba Na Hill are supposed to be nice, perhaps I will do a longer trup to Hue as well, if it is possile.'
    }
  ];
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem({item}) {
    if (!item) return null;
    return (
      <View style={styles.item}>
        <View style={styles.title}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.row}>
            <Text style={styles.number}>{item.lang.toString() + ', '}</Text>
            <Text style={styles.number}>{item.lat.toString()}</Text>

          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.number}>{item.from+ ' - '}</Text>
          <Text style={styles.number}>{item.to}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#f7f7f7"
            onPress={() => {}}
          >
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/edit_icon.png')} style={styles.icon}/>
              <Text style={styles.buttonLabel}>Edit</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#f7f7f7"
            onPress={() => {}}
          >
          <View style={styles.buttonContainer}>
            <Image source={require('../assets/delete_icon.png')} style={styles.icon}/>
            <Text style={styles.buttonLabel}>Delete</Text>
          </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.places}
          renderItem={this._renderItem}
          contentInset= {{bottom:65}}
        />
        <TouchableOpacity style={styles.addLocationButton} onPress={() => this.props.navigation.navigate('YouAddLocation')}>
          <Text style={styles.addLocationButtonText}>Add Location</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: theme.color.darkGray,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    paddingTop: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,

  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme.color.font,
  },
  row: {
    flexDirection: 'row',
  },
  number: {
    fontStyle: 'italic',
    fontSize: 14,
    color: theme.color.font,
  },
  description: {
    fontSize: 16,
    marginTop: 3,
    color: theme.color.font,
  },
  btnTest: {
    height: 54,
    width: '100%',
    backgroundColor: theme.color.main,
    borderRadius: 10,
    marginTop: 10
  },
  txtTestButton: {
    color: theme.color.white,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  button: {
    padding: 15,
    paddingBottom: 5,
  },
  buttonLabel: {
    fontSize: 15,
    marginLeft: 5,
    color: theme.color.font,
  },
  buttonDeleteLabel: {
    fontSize: 15,
    marginLeft: 5,
  },
  buttonContainer:{
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconEdit:{
    tintColor: '#3c59ff',
  },
  icon: {
    width: 15,
    height: 15,
  },
  addLocationButton:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.color.main,
    width: width - 60,
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: theme.color.darkGray,
  },
  addLocationButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

const YourPathOverviewConnected = connect(state =>
  ({ app: state }))(YourPathOverview);

export default YourPathOverviewConnected;
