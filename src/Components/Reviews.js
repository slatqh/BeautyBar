import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Rating } from 'react-native-elements';
import TextCustom from './TextCustom';
import { ServiceName } from './ServiceName';
import Colors from '../../constans/Colors';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.avatar}>
            <Avatar
              size='medium'
              title='Alex'
              placeholder='Alex'
              rounded
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Rating
                type='custom'
                readonly
                raitingColor="yellow"
                raitingTextColor='black'
                ratingBackgroundColor='transparent'
                ratingCount={5}
                imageSize={15}
                style={{ paddingVertical: 5 }}
                onFinishRating={this.ratingCompleted}
              />
              <TextCustom title='Regina' size={12} color='black' />
            </View>
          </View>
          <View style={{ }}>
            <Text style={styles.Date}>Jan 11, 2019</Text>
          </View>
        </View>
        <Text style={styles.textReview}>
          Dolor mollit et adipisicing eu ut.
          Dolor mollit et adipisicing eu ut.
          Dolor mollit et adipisicing eu ut.
          Dolor mollit et adipisicing eu ut.
        </Text>
        <View style={styles.services}>
          <TextCustom title='Services:' color='black' size={13} styles={styles.text} />
          <ServiceName title='Blow Dry' />
          <ServiceName title='Hair Extensions' />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textReview: {
    fontSize: 12,
    fontFamily: 'montserrat',
    alignContent: 'center',
    marginTop: 25,
  },
  Date: {
    color: Colors.purple,
  },
  services: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  text: {
    paddingTop: 10,
    marginBottom: -4,
  },
})
;
