import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export const ConfirmIcon = () => (
  <LinearGradient
    style={styles.container}
    colors={['#eb008c', '#652d91']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
  >
    <View style={styles.inner}>
      <Icon
        name='check'
        size={22}
      />

    </View>
  </LinearGradient>
);
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
});
