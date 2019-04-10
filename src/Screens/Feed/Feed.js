import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
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
          <View style={{ flex: 0.5 }}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/map.jpg')}
            />
          </View>
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
    width: width / 8,
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

