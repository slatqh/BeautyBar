import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constans/Colors';

export const BookingList = () => (
  <View
    style={{
      shadowOffset: { width: 1, height: 7 },
      shadowColor: '#ddd',
      shadowOpacity: 0.9,
      shadowRadius: 5,
      borderRadius: 5,
      marginBottom: 20,
    }}
  >
    <TouchableOpacity
      style={{
        borderRadius: 5,
        borderColor: Colors.lightgrey,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}
    >
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 0.2, borderRightColor: Colors.lightgrey, borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: Colors.purple, fontSize: 24 }}>18</Text>
          <Text style={{ color: Colors.purple, fontSize: 12 }}>Wed</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingLeft: 15, paddingVertical: 15, flexDirection: 'row' }}>
          <View styles={{ }}>
            <Text style={{ fontSize: 14 }}>
              Nails-r-Us
            </Text>
            <Text style={{ fontSize: 8 }}>
              2406 E8th St Los Angeles
            </Text>
            <Text style={{ fontSize: 14, color: Colors.purple, marginTop: 4 }}>
              Nail Polish
            </Text>
          </View>
          <View style={{ backgroundColor: Colors.purple, borderRadius: 5, marginRight: 8, alignIems: 'center' }}>
            <Text style={{ color: 'white', padding: 8 }}>$85</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  </View>
);
