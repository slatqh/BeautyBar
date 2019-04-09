import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { BookingCard, ServiceTitle, BookingList } from '../../Components';

// const WIDTH = Dimensions.get('window').width;

class BookingTab extends React.Component {
  render() {
    const swipeoutBtns = [
      {
        text: 'EDIT',
        backgroundColor: '#eb008c',
        underlayColor: '#f01f9d',
        width: 40,
        height: 60,
        flex: 0.5,
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, padding: 15 }}>Upcoming Booking in February</Text>
        <View style={{ flex: 1, marginRight: 15,
        }}
        >
          <Swipeout
            backgroundColor='white'
            style={{
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
            }}
            right={swipeoutBtns}
          >
            <BookingCard />
          </Swipeout>

        </View>
        <ServiceTitle title='Bookings' size={17} styles={{ marginTop: 35, marginLeft: 15 }} />
        <View style={{ flex: 3 }}>

          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 15,

            }}
          >

            <BookingList />
            <BookingList />
            <BookingList />
            <BookingList />
            <BookingList />
            <BookingList />
            <BookingList />
            <BookingList />

          </ScrollView>
        </View>
      </View>

    );
  }
}

export default BookingTab;
