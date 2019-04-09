import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const BeautyTip = ({ title, text }) => (
  <LinearGradient
    colors={['#652d91', '#eb008c']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    style={styles.containerGradient}
  >
    <View style={styles.textContainer}>
      <Text style={styles.title}>HAIR EXTENSIONS</Text>
      <Icon
        style={styles.icon}
        name='heart-o'
        color='white'
        type='fontawesome'
        size={20}
      />

    </View>

    <Text style={styles.text}>Always brush from the tips up towards you scalp to prevent tandling</Text>
  </LinearGradient>

);

const styles = StyleSheet.create({
  containerGradient: {
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  title: {
    flex: 1,
    paddingHorizontal: 10,
    margin: 5,
    color: 'white',
    fontFamily: 'montserrat-medium',
    letterSpacing: 1,
  },
  text: {
    paddingHorizontal: 25,
    color: 'white',
    marginVertical: 20,
  },
  icon: {
    paddingTop: 0,
    paddingRight: 8,
    alignItems: 'flex-end',
  },
});
