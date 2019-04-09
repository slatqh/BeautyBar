import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PickerButton = ({ onPress, title, color, type, gradient, titleColor, icon, nospace }) => (

  gradient ?
    <Button
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#eb008c', '#652d91'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      onPress={onPress}
      buttonStyle={[styles.button]}
      containerStyle={styles.container}
      type={type}
      title={title}
      titleStyle={nospace ? styles.titleNoSpace : styles.title}
    /> :
    <Button
      iconContainerStyle={styles.iconContainerStyle}
      icon={
        icon ?
          <Icon
            name={icon}
            size={20}
            color="white"
            margin={20}
          /> : null
      }
      iconLeft
      onPress={onPress}
      buttonStyle={[styles.button, styles.buttonStyle, { backgroundColor: color }]}
      containerStyle={{ }}
      type={type}
      title={title}
      titleStyle={[styles.title, { color: titleColor || 'white' }]}
      color={color}
    />

);

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderColor: 'transparent',
  },
  title: {
    marginVertical: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    letterSpacing: 2,
  },
  titleNoSpace: {
    paddingVertical: 0,
    margin: 0,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    letterSpacing: 2,
  },
  iconContainerStyle: {
    marginVertical: 12,
    paddingHorizontal: 40,
    flex: 1,
    alignSelf: 'flex-start',
  },
  buttonStyle: {
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1,
  },
});
