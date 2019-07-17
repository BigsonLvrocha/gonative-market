import React from 'react';
import './config/DevTools';
import './config/Reactotron';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);


export default App;
