import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import MapView from 'react-native-maps';
import {
  CardView,
  BeautyIcon,
  BeautyTip,
  CardService,
  SearchBarMenu,
  SelectButton,
  CustomSmallButton,
  TextCustom,
} from '../../Components';
import Colors from '../../../constans/Colors';

const { width } = Dimensions.get('window');

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  updateSearch = (search) => {
    this.setState({ search });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <MapView
            style={{ flex: 1, width: '100%', height: 300 }}
            region={{
              latitude: 42.882004,
              longitude: 74.582748,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
          />
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.devider} />
            <ScrollView
              // contentContainerStyle={styles.container}
              horizontal
              bounces='none'
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.container}>
                <BeautyIcon title='makeup' source={require('../../../assets/icons/makeup.png')} />
                <BeautyIcon title='hair' source={require('../../../assets/icons/hair.png')} />
                <BeautyIcon title='nails' source={require('../../../assets/icons/nails.png')} />
                <BeautyIcon title='spa' source={require('../../../assets/icons/spa.png')} />
                <BeautyIcon title='skin' source={require('../../../assets/icons/skin.png')} />
                <BeautyIcon title='barber' source={require('../../../assets/icons/barber.png')} />
                <BeautyIcon title='eye' source={require('../../../assets/icons/eye.png')} />
              </View>
            </ScrollView>
            <View style={styles.view}>
              <TextCustom styles={{ margin: 10 }} title='Less than 1 km away' black />
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              bounces='none'
            >
              <View style={{ flexDirection: 'row', overflow: 'visible', paddingBottom: 15 }}>
                <CardView onPress={() => this.props.navigation.navigate('FeedDetails')} />
                <CardView />
                <CardView />
                <CardView />
                <CardView />

              </View>

            </ScrollView>
          </View>
          <View style={{ marginLeft: 10 }}>
            <TextCustom title='Beauty Tip of the day' black styles={styles.tip} />
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces='none'
            >
              <View style={{ flexDirection: 'row', paddingBottom: 15, overflow: 'visible' }}>
                <BeautyTip />
                <BeautyTip />
                <BeautyTip />
                <BeautyTip />
                <BeautyTip />

              </View>

            </ScrollView>
          </View>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View style={{ marginTop: 5, marginBottom: 10 }}>
              <TextCustom title='Venues' black />
            </View>

            <CardService />
            <CardService />
            <CardService />
            <CardService />
          </View>
        </ScrollView>
        <SearchBarMenu
          searchValue={e => this.updateSearch(e)}
          onPress={() => this.setState({ isVisible: true })}
        />
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          width={300}
          height={350}
          containerStyle={{ flex: 0.5 }}
          // height={250}
        >
          <View style={{ flex: 1 }}>
            <TextCustom title='FILTER' size={18} styles={{ alignSelf: 'center', marginVertical: 20 }} />
            <SelectButton icon title='Price: Low to High' />
            <SelectButton icon title='Price: High to Low' />
            <SelectButton icon title='By Reviews' />
            <SelectButton icon title='By Distance' />
            <View style={{ flex: 0.5, width: 150, alignSelf: 'center', marginVertical: 20 }}>
              <CustomSmallButton title='APPLY FILTER' />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  iconWraper: {
    flex: 1,
    justifyContent: 'space-around',
    // flexDirection: 'row',

    alignItems: 'center',
    // paddingVertical: 10,
  },

  container: {
    alignItems: 'center',
    paddingBottom: 5,
    // justifyContent: 'center',
    overflow: 'visible',
    // flex: 1,
    // justifyContent: 'space-around',
    flexDirection: 'row',

    // alignItems: 'center',

  },
  devider: {
    width: width / 6,
    borderTopWidth: 5,
    opacity: 0.6,
    borderTopColor: Colors.grey,

    marginVertical: 15,
    alignSelf: 'center',
  },
  view: {
    width: '100%',
    borderTopColor: '#808080',
    borderTopWidth: 0.8,
  },
  tip: {
    marginVertical: 10,
  },
});

