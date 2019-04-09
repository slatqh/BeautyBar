import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Title, Divider, TextCustom, Review } from '../../Components';
import Colors from '../../../constans/Colors';

const { width } = Dimensions.get('window');

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView
        contentContainerstyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 0.5 }}>
          <Title title='reviews' navigation={this.props.navigation} />

        </View>
        <View style={styles.avatar}>
          <Text style={styles.title}>JUICE SPA SALON</Text>
          <AirbnbRating
            type='custom'
            raitingColor="yellow"
            showRating
            reviews={false}
            raitingTextColor='black'
            ratingBackgroundColor='transparent'
            ratingCount={5}
            size={30}
            containerStyle={{ flex: 1, margin: 0, flexDirection: 'row' }}
            onFinishRating={this.ratingCompleted}
          />
          <TextCustom title='43 reviews' color={Colors.purple} size={16} styles={{ marginTop: 15 }} />
          <View style={styles.raiting}>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={styles.raitingText}
              >
                  92% of customers said they were completely satisfied
              </Text>
            </View>
          </View>
        </View>
        <Divider title='43 reviews' />
        <View
          style={styles.reviews}
        >
          <Review />
          <Review />
          <Review />
          <Review />

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'montserrat-medium',
    fontSize: 20,
    letterSpacing: 1,
    color: 'black',
  },
  raiting: {
    width: width / 1.2,
    justifyContent: 'center',
    textAlign: 'center',
  },
  raitingText: {
    textAlign: 'center',
    fontSize: 14,
  },
  reviews: {
    flex: 1,
    alignItems: 'center',
  },
});
