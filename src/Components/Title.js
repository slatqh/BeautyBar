import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constans/Colors';

const { height } = Dimensions.get('window');
const HEADER = height / 8;
export const Title = ({ title, button, navigation }) => (

  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.goBack(null)}
      style={styles.icon}
    >
      <Icon
        name='ios-arrow-round-back'
        color={Colors.purple}
        size={30}
      />
    </TouchableOpacity>
    <Text style={styles.text}>
      {title.toUpperCase()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: HEADER,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  icon: {
    position: 'absolute',
    top: HEADER / 1.7,
    left: 15,
    marginBottom: 10,
  },
  text: {
    letterSpacing: 2,
    marginBottom: 5,
    alignItems: 'flex-end',
    color: Colors.purple,
    fontFamily: 'montserrat-medium',
    fontSize: 20,
  },
});
