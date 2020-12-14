// /**
//  * @format
//  */
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// // const store = createStore(rootReducer);


// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);