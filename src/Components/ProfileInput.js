import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Colors from '../../constans/Colors';

export const ProfileInput = ({
  onFocus,
  editable,
  onChangeText,
  disabled,
  label,
  placeholder,
  rightIcon,
  defaultValue,
  style,
  onPress }) => (
  <View
    style={[styles.container, style]}
  >
    <TextInput
      editable={editable}
      style={styles.textInput}
      defaultValue={defaultValue}
      selectionColor='black'
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}
      autoCapitalize='none'
      autoCorrect={false}

    >
      <Text
        style={styles.text}
      >{label}</Text>
    </TextInput>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  text: {
    color: Colors.purple,
    fontFamily: 'montserrat',
    fontSize: 14,
  },
  textInput: {
    marginBottom: 5,
    color: Colors.purple,
    fontSize: 14,
  },
});
