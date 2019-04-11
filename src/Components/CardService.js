import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { CustomSmallButton } from './CustomSmallButton';

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT = 200;
const IMAGE_WIDTH = width - 20;

const CARD_WIDTH = width;
const CARD_HEIGHT = 80;

class CardService extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          shadowOffset: { width: -1, height: 8 },
          shadowColor: '00000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          marginBottom: 15,
        }}
      >
        <ImageBackground
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            justifyContent: 'flex-end',

            borderRadius: 10,
            overflow: 'hidden',
            // borderColor: '#ddd',
            // shadowColor: '#f000',
            // shadowOpacity: 0.3,
            // shadowRadius: 1,
            // elevation: 1,
            // borderWidth: 1,
          }}
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
          <View style={styles.bussines}>
            <View style={{ marginLeft: 10, flex: 2, paddingVertical: 3 }}>
              <Text style={styles.desc}>Murjan 3 The walk</Text>
              <Text style={styles.desc}>Dubai - United Arab Emirates</Text>
              <Text style={styles.descTime}>Open from 9:00-21:00  $$$</Text>
            </View>
            <View style={{ flex: 1, marginRight: 10, alignSelf: 'center' }}>
              <CustomSmallButton title='SERVICES' />
            </View>
          </View>
        </ImageBackground>

      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  textContainer: {
    flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start', marginLeft: 5, marginBottom: 5,
  },
  title: {
    flex: 0.2,
    color: 'white',
    letterSpacing: 2,
    fontFamily: 'montserrat-medium',
  },
  bussines: {
    backgroundColor: 'white',
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontFamily: 'montserrat',
  },
  desc: {
    fontSize: 12,
    fontFamily: 'montserrat',
  },
  descTime: {
    fontSize: 12,
    paddingVertical: 3,
    fontFamily: 'montserrat',
    fontWeight: '500',
    opacity: 0.7,
  },
});

export default CardService;
