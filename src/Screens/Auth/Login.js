
import React, { Component } from 'react';
import { View, Image, SafeAreaView, StyleSheet } from 'react-native';
import { CustomButton, TextInput } from '../../Components';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5 }}>
          <SafeAreaView>
            <Image
              style={styles.image}
              source={require('../../../assets/images/AuthLogo.png')}
              resizeMode='center'
            />

          </SafeAreaView>
        </View>
        <View style={styles.text}>

          <TextInput placeholder='NAME' />
          <TextInput placeholder='PASSWORD' secureTextEntry />
          <View style={{ marginTop: 30 }}>
            <CustomButton title='SIGN IN' gradient />
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
