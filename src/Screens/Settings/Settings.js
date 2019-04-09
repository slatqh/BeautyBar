import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { TextCustom, SettingsButton, CustomButton } from '../../Components';
import Colors from '../../../constans/Colors';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
        bounces={false}
      >

        <View style={styles.topContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/butterfly.png')}
          />
          <TextCustom title='Hi, Jane' size={16} />
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.wrapper}>
            <SettingsButton
              title='push notification'
              icon
            />
            <SettingsButton
              title='email notification'
              icon
            />
          </View>
          <View style={styles.wrapper}>
            <SettingsButton
              title='invaite friends'
            />
            <SettingsButton
              title='rate beauty bar'
            />
          </View>
          <View style={styles.wrapper}>
            <SettingsButton
              title='privacy policy'
            />
            <SettingsButton
              title='terms & conditions'
            />
          </View>
          <View style={styles.wrapper}>
            <SettingsButton
              title='contact us'
              disabled
            />
            <View style={styles.contact}>
              <Text>+44 123 456 789</Text>
              <Text>info@beautybar.com</Text>
            </View>
          </View>

        </View>
        {/* <View style={{ flex: 1, alignSelf: 'center' }}>
          <TextCustom title='VISIT OUR OTHER SITES' size={16} />
          <View style={{ textAlign: 'center' }}>
            <TextCustom title='velvet' size={18} style={{ alignSelf: 'center' }} />
            <TextCustom title='velvet' size={18} style={{ alignSelf: 'center' }} />
            <TextCustom title='velvet' size={18} style={{ alignSelf: 'center' }} />
          </View>
        </View> */}
        <View style={styles.button}>
          <CustomButton title='LOGOUT' gradient />

        </View>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  wrapper: {
    marginVertical: 10,
  },
  contact: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
})
;
