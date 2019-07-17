import { createStackNavigator, createAppContainer } from 'react-navigation';
import Categories from './pages/Categories';
import Details from './pages/Details';

export default createAppContainer(
  createStackNavigator({
    Categories,
    Details,
  }, {
    defaultNavigationOptions: {
      header: null,
    },
  }),
);
