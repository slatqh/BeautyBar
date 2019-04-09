import React from 'react';
import { Image, View } from 'react-native';
import Colors from '../../constans/Colors';

function Icon(name) {
  switch (name) {
    case 'profile':
      return require('../../assets/icons/TabIcons/user.png');
    case 'booking':
      return require('../../assets/icons/TabIcons/booking.png');
    case 'feed':
      return require('../../assets/icons/TabIcons/feed.png');
    case 'settings':
      return require('../../assets/icons/TabIcons/settings.png');
    default:
      return null;
  }
}

export const TabIcon = ({ name, active }) => {
  const iconColor = { tintColor: Colors.purple };
  return (
    <View>
      <Image
        style={[active ? iconColor : null, name === 'profile' ? { width: 32, height: 32 } : { width: 25, height: 25 }]}
        source={Icon(name)}
      />
    </View>
  );
};
