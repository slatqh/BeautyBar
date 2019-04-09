import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

export const ServiceName = ({ title }) => (
  <View style={styles.container}>
    <TextCustom title={title} color='black' size={13} styles={{ padding: 5 }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.lightgrey,
    borderLeftColor: Colors.purple,
    borderWidth: 1,
    borderLeftWidth: 4,
    flexDirection: 'row',
    marginTop: 5,
  },
})
;
