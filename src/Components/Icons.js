import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../constans/Colors';

export default class BeautyIcon extends Component {
  state={
    active: false,
  }
  render() {
    const { active } = this.state;

    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 20, flex: 1 }}
        onPress={() => this.setState({ active: !this.state.active })}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={this.props.source}
            style={[active ? { tintColor: Colors.purple } : null, this.props.title === 'skin' ? styles.skin : styles.image]}
            resizeMode='cover'
          />
          <Text
            style={[styles.text, {
              color: active ? Colors.purple : Colors.grey,
            }]}
          >
            {this.props.title.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: 25,
    width: 25,
    overflow: 'visible',
  },
  skin: {
    height: 24,
    width: 15,
    overflow: 'visible',
    // marginBottom: 8,
  },
  text: {
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    paddingTop: 5,
  },
});
