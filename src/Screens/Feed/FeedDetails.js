import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { CardPrice, TextCustom, FeedHeader, ServiceTitle } from '../../Components';
import Colors from '../../../constans/Colors';

class FeedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ }}
        bounces={false}
      >

        <View style={{ flex: 1 }}>
          <View style={{ }}>
            <FeedHeader navigation={this.props.navigation} />

          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <TextCustom title='Services' size={14} styles={{ paddingVertical: 10 }} color='black' />
            <ServiceTitle title='Hair' size={12} styles={{ color: Colors.purple }} />
            <CardPrice onPress={() => this.props.navigation.navigate('BookingScreen')} />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
          </View>
        </View>

      </ScrollView>
    );
  }
}
const styles = {

};
export default FeedDetails;
