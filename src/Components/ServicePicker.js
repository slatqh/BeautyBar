import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

export default class ServicePicker extends Component {
  state={
    checked: false,
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.selected(!this.state.checked)}
        style={styles.button}
      >
        <View style={styles.container}>
          <Avatar
            rounded
            title='Dylan'
            source={{
              uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <TextCustom size={14} title="Women's Designer" color='#273d52' styles={{ marginLeft: 8 }} />

        </View>
        <Icon
          containerStyle={{ flex: 0.2 }}
          name='keyboard-arrow-down'
          type='materialIcons'
          size={18}
        />
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: Colors.lightgrey,
    borderLeftColor: Colors.purple,
    borderWidth: 1,
    borderLeftWidth: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
    flex: 1 },
})
;
