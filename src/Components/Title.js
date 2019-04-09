import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../constans/Colors';

const { height } = Dimensions.get('window');
const HEADER = height / 8;
export const Title = ({ title, button, navigation }) => (

  <View style={styles.container}>
    <Icon
      onPress={() => navigation.goBack(null)}
      containerStyle={{
        position: 'absolute',
        top: HEADER / 1.45,
        left: 10,
        marginBottom: 10,

      }}
      name='arrowleft'
      type='antdesign'
      color={Colors.purple}
      size={20}
    />
    <Text style={{
      letterSpacing: 2,
      marginBottom: 5,
      alignItems: 'flex-end',
      color: Colors.purple,
      fontFamily: 'montserrat-medium',
      fontSize: 20,
    }}
    >
      {title.toUpperCase()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: HEADER,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

  },
});
