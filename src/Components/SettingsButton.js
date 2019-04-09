import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../../constans/Colors';

export const SettingsButton = ({ title, icon, disabled }) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setSelected(!selected)}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
      {
        icon ? <CheckBox
          left
          // titleProps={{ style: { color: Colors.purple, fontSize: 16 } }}
          iconRight
          containerStyle={{ backgroundColor: 'white', borderColor: 'white', padding: 0, margin: 0 }}
          checkedIcon='check-circle'
          uncheckedIcon='circle-thin'
          uncheckedColor={Colors.purple}
          checkedColor={Colors.purple}
          checked={selected}
          onPress={() => setSelected(!selected)}
        /> : null
      }
    </TouchableOpacity>

  );
}
;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 14,
    // fontColor: 'black',
    marginLeft: 15,
    letterSpacing: 1,
    fontFamily: 'montserrat',
    textTransform: 'uppercase',
  },
})
;
