import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigator';
import { Provider } from 'react-redux'
import store from './src/Redux/store';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

