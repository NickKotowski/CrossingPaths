import {createStackNavigator, createAppContainer} from "react-navigation";

import YouAddLocation from "../screens/YouAddLocation";
import YouAddMap from "../screens/YouAddMap";
import YouOverview from "../screens/YouOverview";

const YouNavigator = createStackNavigator({
  YouOverview: {
    screen: YouOverview
  },
  YouAddLocation: {
    screen: YouAddLocation
  },
  YouAddMap: {
    screen: YouAddMap
  }
});

export default createAppContainer(YouNavigator);
