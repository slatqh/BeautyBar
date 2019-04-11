import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeout from 'react-native-swipeout';
import { BookingCard, TextCustom } from '../../Components';
import Colors from '../../../constans/Colors';

class PastBookings extends React.Component {
  CancelButton = () => (
    <View style={styles.cancelButton}>
      <Icon
        name='trash'
        size={25}
        type='FontAwesome5'
        color='white'
      />
      <TextCustom
        title='CANCEL'
        size={10}
        styles={{ color: 'white', marginTop: 5 }}
      />
    </View>
  );
  render() {
    const swipeoutBtns = [
      {
        text: 'EDIT',
        backgroundColor: '#eb008c',
        underlayColor: '#f01f9d',
        width: 30,
        height: 60,
        component: this.CancelButton(),

      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('BookingTab')}
            >
              <Text style={styles.reviews}>UPCOMING BOOKINGS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBorder}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Booking')}
            >
              <Text style={styles.reviews}>PAST BOOKINGS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, marginRight: 15 }}>
          <Swipeout
            backgroundColor='white'
            style={styles.swipes}
            right={swipeoutBtns}
          >
            <BookingCard />
          </Swipeout>
          <Swipeout
            backgroundColor='white'
            style={styles.swipes}
            right={swipeoutBtns}
          >
            <BookingCard />
          </Swipeout>
          <Swipeout
            backgroundColor='white'
            style={styles.swipes}
            right={swipeoutBtns}
          >
            <BookingCard />
          </Swipeout>

        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  buttonsContainer: {
    borderTopColor: Colors.grey,
    borderWidth: 0.5,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.grey,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviews: {
    alignSelf: 'center',
    padding: 10,
    color: Colors.grey,
    fontFamily: 'montserrat',
    letterSpacing: 1,
    fontSize: 12,
  },
  buttonBorder: {
    flex: 1,
    borderLeftWidth: 0.5,
    borderColor: Colors.grey,
  },
  swipes: {
    marginTop: 15,
    marginLeft: 15,
    // backgroundColor: 'white',
    height: null,
    // width: WIDTH,
    shadowOffset: { width: 1, height: 7 },
    shadowColor: '#ddd',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    borderRadius: 5,
    overflow: 'visible',
  },
  cancelButton: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
});
export default PastBookings;
