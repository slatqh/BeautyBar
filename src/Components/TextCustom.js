import React from 'react';
import { Text } from 'react-native';
import Colors from '../../constans/Colors';

const TextCustom = ({ size, fontFamily, title, color, styles }) => (
  <Text
    style={[{
      letterSpacing: 1,
      fontSize: size || 12,
      fontFamily: fontFamily || 'montserrat',
      color: color || Colors.grey,
    }, styles]}
  >
    {title}
  </Text>
);

export default TextCustom;
