import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const BeautyTip = ({ title, text }) => (
  <View
    style={styles.container}
  >
    <LinearGradient
      colors={['#652d91', '#eb008c']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.containerGradient}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>HAIR EXTENSIONS</Text>
        <Icon
          style={styles.iconHeart}
          name='heart-o'
          color='white'
          type='fontawesome'
          size={20}
        />

      </View>
      <View style={{ justifyContent: 'flex-start' }}>
        <Image
          source={require('../../assets/icons/tips-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.text}> Always brush from tips up towards you scalp to prevent tandling</Text>

      </View>
    </LinearGradient>

  </View>

);

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    overflow: 'visible',
  },
  containerGradient: {
    marginRight: 10,
    width: WIDTH / 2,
    height: HEIGHT / 7,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  title: {
    flex: 0.8,
    fontSize: 10,
    paddingHorizontal: 10,
    margin: 5,
    color: 'white',
    fontFamily: 'montserrat-medium',
    letterSpacing: 1,
  },
  text: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
    textAlign: 'left',
    fontSize: 12,
    color: 'white',
  },
  iconHeart: {
    flex: 0.2,
    paddingTop: 0,
    paddingRight: 8,
    alignItems: 'flex-end',
  },
  icon: {
    width: 20,
    height: 30,
    marginLeft: 15,
    zIndex: -1,
    opacity: 0.5,
  },
});
