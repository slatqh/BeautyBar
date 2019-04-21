import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Colors from '../../constans/Colors';

export const TextInput = ({ placeholder, icon, onChangeText, secureTextEntry, error, label, password }) => (
  <Input
    placeholder={placeholder}
    onChangeText={onChangeText}
    autoCapitalize='none'
    placeholderTextColor={Colors.grey}
    autoCorrect={false}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid="transparent"
    keyboardAppearance='default'
    leftIconContainerStyle={{ marginLeft: -10 }}
    rightIconContainerStyle={{ backgroundColor: 'white' }}
    inputContainerStyle={styles.inputContainerStyle}
    inputStyle={styles.inputStyle}
    errorMessage={
      error ? `Please enter ${label}.` :
        password ? 'Password must be at least 8 characters long.' :
          null
    }
    leftIcon={
      <Icon
        iconStyle={{ color: 'white' }}
        name={icon}
        size={24}
      />
    }
  />
);

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: Colors.lightgrey,
    opacity: 0.9,
    marginBottom: 3,
  },
  inputStyle: {
    color: Colors.grey,
    fontSize: 12,
    paddingLeft: 10,
    letterSpacing: 5,
    fontFamily: 'montserrat',
  },
});
