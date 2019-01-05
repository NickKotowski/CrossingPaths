import { createStackNavigator, createAppContainer } from 'react-navigation';

import Counter from '../screens/Counter';
import CounterScreen from '../screens/CounterScreen';

const AppNavigator = createStackNavigator({
  Counter: {
    screen: Counter,
  },
  CounterScreen: {
    screen: CounterScreen,
  }
});

export default createAppContainer(AppNavigator);
