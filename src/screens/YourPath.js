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
import {Button} from "../components";
import theme from "../theme";
// import firebase from 'react-native-firebase';

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
  btnTest: {
    height: 54,
    width: '100%',
    backgroundColor: theme.Color.Main,
    borderRadius: 10,
    marginTop: 10
  },

  txtTestButton: {
    color: theme.Color.White,
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
    return <View style={styles.item}>
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
          <Text style={styles.buttonLabel}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#f7f7f7"
          onPress={() => {}}
        >
          <Text style={styles.buttonLabel}>Delete</Text>
        </TouchableHighlight>
      </View>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.showWith}>Showing your path (Nick Kotowski): 1</Text>
        <Text style={styles.followBy}>5 people are following you</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.places}
          renderItem={this._renderItem}
        />
        <Button
          style={styles.btnTest}
          textStyle={styles.txtTestButton}
          text='Add Location'
        />
      </View>
    );
  }
}

const YourPathConnected = connect(state => ({app: state}), {
  increaseCount,
})(YourPath);

export default YourPathConnected;
