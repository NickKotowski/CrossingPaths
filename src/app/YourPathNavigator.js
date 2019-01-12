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
    title: 'Your Path',
  },
  YouAddLocation: {
    screen: YouAddLocation,
  },
  YouAddMap: {
    screen: YouAddMap,
  }
});

export default createAppContainer(YourPathNavigator);
