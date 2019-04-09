import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const CustomSmallButton = ({ onPress, title, titleStyle }) => (

  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <LinearGradient
      colors={['#eb008c', '#652d91']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 60,
    borderColor: 'transparent',
    overflow: 'hidden',

  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    letterSpacing: 2,
    color: 'white',
    paddingVertical: 5,
  },
});
