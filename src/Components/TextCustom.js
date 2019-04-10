import React from 'react';
import { Text } from 'react-native';
import Colors from '../../constans/Colors';

const TextCustom = ({ size, fontFamily, title, color, styles, purple }) => (
  <Text
    style={[{
      letterSpacing: 1,
      fontSize: size || 12,
      fontFamily: fontFamily || 'montserrat',
      color: purple ? Colors.purple : Colors.grey,
    }, styles]}
  >
    {title}
  </Text>
);

export default TextCustom;
