import { createStackNavigator, createAppContainer } from 'react-navigation';
import Categories from './pages/Categories';

export default createAppContainer(
  createStackNavigator({
    Categories,
  }, {
    defaultNavigationOptions: {
      header: null,
    },
  }),
);
