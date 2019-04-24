import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {
  FeedHeader,
  ServiceTitle,
  CardPrice,
  TextCustom,
  CustomButton,
} from '../../Components';
import Colors from '../../../constans/Colors';

export default class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <FeedHeader navigation={this.props.navigation} noButtons />
        <View style={styles.textWraper}>
          <Text style={{ fontFamily: 'montserrat' }}>Here are the details of your booking.</Text>
          <Text style={{ fontFamily: 'montserrat', padding: 10 }}>If everything looks good, click the button</Text>
          <Text style={{
            textAlign: 'center', fontFamily: 'montserrat',
          }}
          >
             below to confirm!
          </Text>
        </View>
        <View style={styles.mainView}>
          <ServiceTitle title='Booking' />
          <ServiceTitle title='Service' size={12} styles={{ color: Colors.purple }} />
          <CardPrice disabled />
        </View>
        <View style={styles.view}>
          {/* <ServiceTitle title='Attendant' />
          <EmployeeSelect noIcon title='Hello' /> */}
          <ServiceTitle title='Date' />
          <ServiceTitle title='Thuesday February 1, 2019' color={Colors.purple} />
          <ServiceTitle title='Time' />
          <ServiceTitle title='11:00 - 11:45' color={Colors.purple} />

          <ServiceTitle title='Special Requirements ' />
          <ServiceTitle title='None' color={Colors.purple} />
          <ServiceTitle title='Payment' />
          <ServiceTitle title='Payment required at the venue' color={Colors.purple} />
          <View style={{ paddingVertical: 15 }}>
            <CustomButton
              gradient
              title='CONFIRM BOOKING'
              onPress={() => this.props.navigation.navigate('ConfirmFinal')}
            />
            <View style={styles.containerOr}>
              <View style={styles.line} />
              <Text style={styles.or}> OR</Text>
              <View style={styles.line} />
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
              marginBottom: 15,
            }}
            >
              <TouchableOpacity
                style={{
                  borderColor: Colors.purple,
                  borderBottomWidth: 1,
                }}
                onPress={() => this.props.navigation.navigate('FeedMain')}
              >
                <TextCustom title='CANCEL' color={Colors.purple} size={14} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textWraper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  mainView: {
    paddingHorizontal: 15,
  },
  view: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  containerOr: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  line: {
    width: 50,
    borderTopWidth: 4,
    borderTopColor: '#cfd8dc',
  },
  or: {
    paddingHorizontal: 10,
    fontFamily: 'Montserrat',
    color: '#7f8184',
  },
});
