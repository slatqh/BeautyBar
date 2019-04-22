import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigator';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/Redux/store';
import { LoadingScreen } from './src/Components'

YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
        </View>
      </Provider>
    );
  }
}

