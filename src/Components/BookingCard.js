import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

export const BookingCard = () => (

  <View style={styles.container}>
    <View style={styles.innerDate}>
      <TextCustom title='11' size={20} purple />
      <TextCustom title='Thurs' size={14} purple />
    </View>
    <View style={styles.innerMain}>
      <Text style={styles.businessName}>JUICE SPA SALON</Text>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AirbnbRating
          type='custom'
          raitingColor="#ffc57c"
          showRating={false}
          // reviews={false}
          ratingBackgroundColor='transparent'
          ratingCount={5}
          size={12}
          style={{ margin: 0, flexDirection: 'row' }}
          onFinishRating={this.ratingCompleted}
        />
      </View> */}
      <TextCustom
        title='Shop No 8, Nashwan Building, Mankhool Road, Bur Dubai, Dubai, EAU'
        size={8}
        color='black'
        styles={styles.address}
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.service}>Blow Dry</Text>
        <Text style={{ color: 'black' }}>At 11:00</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.lightgrey,
  },
  innerDate: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: Colors.lightgrey,
  },
  businessName: {
    fontSize: 12,
    paddingVertical: 5,
    letterSpacing: 1,
  },
  innerMain: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 8,
  },
  address: {
    alignSelf: 'flex-start',
    width: 210,
    paddingVertical: 5,
  },
  service: {
    fontSize: 14,
    color: Colors.purple,
    alignSelf: 'flex-start',
  },
})
;
