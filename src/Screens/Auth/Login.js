
import React, { Component } from 'react';
import { View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CustomButton, TextInput, TextCustom } from '../../Components';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <Image
              style={styles.image}
              source={require('../../../assets/images/AuthLogo.png')}
              resizeMode='center'
            />

          </SafeAreaView>
        </View>
        <View style={styles.text}>

          <TextInput placeholder='EMAIL' />
          <TextInput placeholder='PASSWORD' secureTextEntry />
          <View style={{ margin: 15 }}>
            <CustomButton title='SIGN IN' gradient />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 15 }}>
            <TouchableOpacity>
              <TextCustom title='FORGOT DETAILS?' size={10} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}
            >
              <TextCustom title='CREATE ACCOUNT' size={10} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', fontFamily: 'montserrat', color: '#7f8184', fontSize: 12 }}>
                CLICK HERE FOR
            </Text>
            <Text style={{ fontFamily: 'montserrat', color: '#7f8184', fontSize: 12 }}>
                BEAUTY BAR FOR {' '}
              <Text style={{ fontFamily: 'montserrat-semiBold', fontSize: 12, paddingLeft: 3 }}>BUSINESS</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
  text: {
    flex: 2,
    paddingHorizontal: 20,
    alignContent: 'center',
  },
});
