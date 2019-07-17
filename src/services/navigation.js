import { NavigationActions } from 'react-navigation';

let navigator = null;

export function setNavigator(nav) {
  navigator = nav;
}

export function navigate(routeName) {
  navigator.dispatch(NavigationActions.navigate({ routeName }));
}
