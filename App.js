import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigator';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}

