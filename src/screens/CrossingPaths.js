import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {increaseCount} from '../store/actions';
import { Button, Entry } from "../components";
import theme from "../theme";
// import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 30,
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
    // borderColor: '#a7a7a7',
    // borderWidth: 1,
    marginTop: 10,
    elevation: 2
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

  list:{
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#979797',
    shadowOpacity: 1,
    shadowRadius: 1,
  }
})

export class YourPath extends Component {
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
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // this.listUsers();
    // console.log('Hello');
  }

  _renderItem({item}) {
    if (!item) return null;
    return <Entry data={item} />
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={this.places}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const YourPathConnected = connect(state => ({app: state}), {
  increaseCount,
})(YourPath);

export default YourPathConnected;
