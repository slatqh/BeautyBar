import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import { View, Text } from 'react-native';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

export const BookingCard = () => (

  <View style={{
    height: 150,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.lightgrey,

  }}
  >
    <View style={{
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth: 1,
      borderRightColor: Colors.lightgrey }}
    >
      <Text style={{ fontSize: 20, color: Colors.purple, alignSelf: 'center' }}> 11</Text>
      <Text style={{ fontSize: 14, color: Colors.purple }}> Friday</Text>
      <Text style={{ paddingTop: 35, fontSize: 16, letterSpacing: 2, color: Colors.purple }}> 11:00</Text>
    </View>
    <View style={{ flexDirection: 'column', flex: 1, paddingHorizontal: 8 }}>
      <Text style={{ fontSize: 18, paddingVertical: 5, letterSpacing: 1 }}>JUICE SPA SALON</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        <Text style={{ fontSize: 10, paddingLeft: 5 }}>43 reviews</Text>
      </View>
      <TextCustom title='Shop No 8, Nashwan Building, Mankhool Road, Bur Dubai, Dubai, EAU' size={8} color='black' styles={{ alignSelf: 'flex-start', width: 210, paddingVertical: 5 }} />
      <Text style={{ letterSpacing: 0.5 }}>Upscale hair salon in Bur Dubai</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 18, color: Colors.purple, alignSelf: 'center' }}>Blow Dry</Text>
        <View style={{ backgroundColor: Colors.purple, padding: 9, alignSelf: 'center', borderRadius: 3 }}>
          <Text style={{ color: 'white' }}>$85</Text>
        </View>

      </View>
    </View>
  </View>
);
