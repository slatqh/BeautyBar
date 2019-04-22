import React from 'react';
import { View, Text, Image } from 'react-native';


export const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor: 'white'}}>
        <Image
          source={require('../../assets/images/AuthLogo.png')}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}
          resizeMode='center'
        />
    </View>
  )
}