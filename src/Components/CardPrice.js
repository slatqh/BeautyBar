import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

export default class CardPrice extends Component {
  state={
    checked: false,
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <View style={styles.inner}>
          <TextCustom size={14} title="Women's Designer" color='#273d52' />
          <TextCustom size={14} title='45 minutes' color='#273d52' />
        </View>
        <View style={{ flex: 1, alignSelf: 'flex-end' }}>
          <CheckBox
            left
            titleProps={{ style: { color: Colors.purple, fontSize: 16, marginRight: 15 } }}
            title='$230'
            iconRight
            containerStyle={{ backgroundColor: 'white', borderColor: 'white' }}
            checkedIcon='check-circle'
            uncheckedIcon='circle-thin'
            uncheckedColor={Colors.purple}
            checkedColor={Colors.purple}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: Colors.lightgrey,
    borderLeftColor: Colors.purple,
    borderWidth: 1,
    borderLeftWidth: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inner: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 2,
  },
});
