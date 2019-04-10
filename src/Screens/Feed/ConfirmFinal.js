import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextCustom, ServiceTitle, CustomButton, ConfirmIcon } from '../../Components';
import Colors from '../../../constans/Colors';

export default class ConfirmFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TextCustom title='CONFIRMED' size={16} styles={{ color: Colors.purple }} />
          <View style={{ marginVertical: 15 }}>
            <ConfirmIcon />

          </View>
          <TextCustom size={12} styles={{ color: Colors.darkBlue }} title='Confirmation #123-345-45690' />
        </View>
        <View style={{ flex: 0.5, marginLeft: 15 }}>
          <ServiceTitle title='Booking' />

        </View>

        <View style={styles.body}>
          <TextCustom title='JUICE SPA SALON' size={18} />
          <TextCustom title='Shop No 8, Nashwan Building, Mankhool' purple size={10} />
          <TextCustom title='Road, Bur Dubai, Dubai, UAE' purple size={10} />

          <View style={styles.confirmDetails}>
            <View style={{ flex: 0.2 }}>
              <Text>1</Text>
            </View>
            <View style={{ flex: 0.8 }}>
              <TextCustom title='Blow Dry' size={12} styles={{ color: 'black', fontWeight: '500' }} />
              <TextCustom title='45 minutes' styles={{ fontStyle: 'italic' }} />
              <TextCustom title='Thuesday February 1, 2019' styles={{ fontStyle: 'italic' }} />
              <TextCustom title='11:00 - 11:45' styles={{ fontStyle: 'italic' }} />
              <TextCustom title='Special requirements: None' styles={{ fontStyle: 'italic' }} />
            </View>
            <View style={{ flex: 0.2 }}>
              <TextCustom title='$85' purple size={14} />
            </View>
          </View>
          <View style={styles.total}>
            <ServiceTitle title='Total' styles={{ color: 'black', fontWeight: '500' }} size={12} />
            <TextCustom title='$85' purple size={14} styles={{ marginRight: 30, fontWeight: '500' }} />
          </View>
          <TextCustom title='Payment required at the venue' />
        </View>
        <View style={styles.calendar}>
          <View style={styles.calendarInner}>
            <TextCustom title='Add booking to your calendar' />
            <Image
              source={require('../../../assets/icons/TabIcons/booking.png')}
              style={styles.calendarImage}
            />
          </View>
          <CustomButton title='DONE' gradient />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  body: {
    flex: 2,
    marginLeft: 15,
  },
  confirmDetails: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendar: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  calendarInner: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  calendarImage: {
    width: 25,
    height: 25,
    marginLeft: 15,
    tintColor: Colors.purple,
  },
});
