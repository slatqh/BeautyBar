import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  updateSearch = search => {
    this.setState({ search });
    this.props.searchValue(this.state.search);
  };
  render() {
    return (
      <View style={{
        position: 'absolute',
        top: 40,
        right: 0,
        left: 20,
        flexDirection: 'row',
        flex: 1,
        // marginHorizontal: 25,
        alignItems: 'center',
      }}
      >
        <SearchBar
          round
          placeholder='Search for venues'
          inputStyle={{ fontSize: 14, padding: 0, margin: 0 }}
          inputContainerStyle={{
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 40,
          }}
          containerStyle={{
            flex: 1,
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',

            borderColor: 'transparent',
            backgroundColor: 'transparent' }}
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <View style={{ flex: 0.2, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={this.props.onPress}
          >
            <Image
              style={{ overflow: 'visible', height: 40, width: 40 }}
              source={require('../../assets/icons/menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
