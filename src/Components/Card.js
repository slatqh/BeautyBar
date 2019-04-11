import React from 'react';
import { View, Text, ImageBackground, Dimensions, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Colors from '../../constans/Colors';

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT = height / 4;
const IMAGE_WIDTH = width / 1.7;

// const CARD_WIDTH = width / 1.7;
const CARD_HEIGHT = IMAGE_HEIGHT / 2.5;

export const CardView = ({ onPress }) => (
  <View style={{
    marginRight: 10,
    borderRadius: 5,
    overflow: 'visible',
  }}
  >

    <TouchableOpacity
      onPress={onPress}
      style={{

        borderRadius: 10,
        shadowOffset: { width: -1, height: 8 },
        shadowColor: '00000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}
    >
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/fashion.jpeg')}
        resizeMethod='scale'
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}> RAMI JABALI SALON</Text>
          <AirbnbRating
            type='custom'
            raitingColor="yellow"
            showRating={false}
            // reviews={false}
            ratingBackgroundColor='transparent'
            ratingCount={5}
            size={15}
            style={{ margin: 0, flexDirection: 'row' }}
            onFinishRating={this.ratingCompleted}
          />
        </View>
        <View style={[Platform.OS === 'android' ? styles.android : styles.ios,
          {
            borderBottomColor: Colors.lightgrey,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderLeftColor: Colors.lightgrey,
            borderRightWidth: 1,
            borderRightColor: Colors.lightgrey,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        ]}
        >
          <View style={{ padding: 5 }}>
            <Text style={styles.desc}>Murjan 3 The walk</Text>
            <Text style={styles.desc}>Dubai - United Arab Emirates</Text>
            <Text style={styles.descTime}>Open from 9:00-21:00  $$$</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  backgroundImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    justifyContent: 'flex-end',
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',

  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 5,
    marginBottom: 5,
  },
  title: {
    color: 'white',
    letterSpacing: 2,
    fontFamily: 'montserrat-medium',
  },

  desc: {
    fontSize: 12,
    fontFamily: 'montserrat',
  },
  descTime: {
    fontSize: 12,
    // padding: 3,
    fontFamily: 'montserrat',
    fontWeight: '500',
    opacity: 0.7,
  },
  android: {
    backgroundColor: 'white',
    height: CARD_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  ios: {
    backgroundColor: 'white',
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'space-around',

  },
});
