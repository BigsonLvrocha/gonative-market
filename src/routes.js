import { createStackNavigator, createAppContainer } from 'react-navigation';
import Categories from './pages/Categories';
import Details from './pages/Details';
import Cart from './pages/Cart';

export default createAppContainer(
  createStackNavigator({
    Categories,
    Details,
    Cart,
  }, {
    defaultNavigationOptions: {
      header: null,
    },
  }),
);
