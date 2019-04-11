import React from 'react';
import { Text } from 'react-native';
import Colors from '../../constans/Colors';

export const ServiceTitle = ({ size, fontFamily, title, color, styles }) => (
  <Text
    style={[{
      letterSpacing: 1,
      marginVertical: 10,
      fontSize: size || 12,
      fontFamily: fontFamily || 'montserrat',
      color: color || Colors.black,
    }, styles]}
  >
    {title}
  </Text>
);
