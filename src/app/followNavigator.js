import {createStackNavigator, createAppContainer} from "react-navigation";

import FollowOverview from "../screens/FollowOverview";
import FollowFind from "../screens/FollowFind";
import FollowDetails from "../screens/FollowDetails";

const FollowNavigator = createStackNavigator({
  FollowOverview: {
    screen: FollowOverview
  },
  FollowFind: {
    screen: FollowFind
  },
  FollowDetails: {
    screen: FollowDetails
  }
});

export default createAppContainer(FollowNavigator);
