import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

const { width } = Dimensions.get('window');
const HEADER = width / 1.5;

export default class FeedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, width: '100%', height: HEADER }}>
        <LinearGradient
          colors={['black', 'transparent']}
          start={{ x: 10, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={{ opacity: 0.8 }}
        />
        <ImageBackground
          source={require('../../assets/images/feeddetails.png')}
          style={{ width: '100%', flex: 1 }}
          blurRadius={1}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name='ios-arrow-round-back'
                color='white'
                size={40}
              />

            </View>

          </View>
          <View style={styles.Title}>
            <Text
              style={styles.titleText}
            >
              JUICE SPA SALON
            </Text>
            <AirbnbRating
              type='custom'
              raitingColor="#ffc57c"
              showRating={false}
              // reviews={false}
              ratingBackgroundColor='transparent'
              ratingCount={5}
              size={15}
              style={{ margin: 0, flexDirection: 'row' }}
              onFinishRating={this.ratingCompleted}
            />
            <View style={styles.address}>
              <TextCustom
                styles={{ color: Colors.grey }}
                size={10}
                title='Shop No 8, Nashwan Building, Mankholl Road, Bur Dubai, Dubai UEA'
              />
            </View>
          </View>
        </ImageBackground>
        { this.props.noButtons ? <View /> : <View style={styles.buttonsContainer}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('About')}
            >
              <Text style={styles.reviews}>ABOUT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBorder}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Reviews')}
            >
              <Text style={styles.reviews}>REVIEWS</Text>
            </TouchableOpacity>
          </View>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reviews: {
    alignSelf: 'center',
    padding: 10,
    color: Colors.lightblack,
    fontFamily: 'montserrat',
    letterSpacing: 1,
    fontSize: 14,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    flex: 1,
    marginLeft: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  Title: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  titleText: {
    color: 'white',
    letterSpacing: 2,
    fontFamily: 'montserrat-medium',
    marginLeft: 7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: Colors.grey,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    flex: 1,
    borderLeftWidth: 0.7,
    borderColor: Colors.grey,
  },
  address: {
    width: width / 1.6, alignItems: 'center', paddingBottom: 10,
  },
});

