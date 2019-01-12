import { createStackNavigator, createAppContainer } from "react-navigation";

import YouAddLocation from "../screens/YouAddLocation";
import YouAddMap from "../screens/YouAddMap";
import YourPathOverview from "../screens/YourPathOverview";

import theme from '../theme';

const YourPathNavigator = createStackNavigator({
  YouOverview: {
    screen: YourPathOverview,
    navigationOptions: {
      title: 'Your Path',
      headerTitleStyle: {
        color: theme.color.main,
        fontSize: 14,
      }
    },
  },
  YouAddLocation: {
    screen: YouAddLocation,
    navigationOptions: {
      title: 'Add Location',
      headerTitleStyle: {
        color: theme.color.main,
        fontSize: 14,
      }
    },
  },
  YouAddMap: {
    screen: YouAddMap,
  }
}, {
  initialRouteName: 'YouAddLocation',
});

export default createAppContainer(YourPathNavigator);
