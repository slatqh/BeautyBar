import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constans/Colors';

export const Divider = ({ title }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 30,
    backgroundColor: Colors.divider,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'montserrat-medium',
    letterSpacing: 1,
    marginLeft: 15,
  },
});
