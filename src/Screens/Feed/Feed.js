import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { CardView, BeautyIcon, BeautyTip, CardService } from '../../Components';
import Colors from '../../../constans/Colors';

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.image}
            source={require('../../../assets/images/map.jpg')}
          />
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.devider} />
            <ScrollView
              contentContainerStyle={styles.container}
              horizontal
              bounces='none'
              showsHorizontalScrollIndicator={false}
            >

              <BeautyIcon title='makeup' source={require('../../../assets/icons/makeup.png')} />
              <BeautyIcon title='hair' source={require('../../../assets/icons/hair.png')} />
              <BeautyIcon title='nails' source={require('../../../assets/icons/nails.png')} />
              <BeautyIcon title='spa' source={require('../../../assets/icons/spa.png')} />
              <BeautyIcon title='skin' source={require('../../../assets/icons/skin.png')} />
              <BeautyIcon title='barber' source={require('../../../assets/icons/barber.png')} />
              <BeautyIcon title='eye' source={require('../../../assets/icons/eye.png')} />

            </ScrollView>
            <View style={styles.view}>
              <Text style={{ margin: 10 }}>Less than 1 km away</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              bounces='none'
            >
              <CardView onPress={() => this.props.navigation.navigate('FeedDetails')} />
              <CardView />
              <CardView />
              <CardView />
              <CardView />

            </ScrollView>
          </View>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={styles.tip}>Beauty Tip of the day</Text>
            <BeautyTip />
            <Text style={styles.tip}> Venues</Text>

            <CardService />
            <CardService />
            <CardService />
            <CardService />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
  },
  container: {

    // justifyContent: 'space-around',

    alignItems: 'center',
    paddingVertical: 10,
  },
  devider: {
    width: 80,
    borderTopWidth: 3,
    borderTopColor: Colors.grey,
    opacity: 0.6,
    margin: 10,
    alignSelf: 'center',
  },
  view: {
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  tip: {
    marginVertical: 10,
  },
});

