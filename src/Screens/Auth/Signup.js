
import React, { Component } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomButton, TextInput, TextCustom } from '../../Components';
import Colors from '../../../constans/Colors';

const { height } = Dimensions.get('window');
const HEADER = height / 8;

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: false,
      female: false,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.5, justifyContent: 'space-evenly' }}>
          <SafeAreaView>
            <Icon
              onPress={() => this.props.navigation.goBack(null)}
              style={{
                position: 'absolute',
                top: HEADER / 2.5,
                left: 10,
                marginBottom: 10,

              }}
              name='ios-arrow-round-back'
              type='ionicons'
              color={Colors.purple}
              size={35}
            />
            <Image
              style={styles.logo}
              source={require('../../../assets/images/AuthLogo.png')}
              resizeMode='center'
            />

          </SafeAreaView>
          <Avatar
            containerStyle={{ alignSelf: 'center' }}
            avatarStyle={{ backgroundColor: 'skyblue' }}
            icon={{ name: 'user', type: 'font-awesome' }}
            showEditButton
            editButton={{
              name: 'add',
              type: 'fontawesome',
              color: Colors.white,
            }}
            size='large'
            iconStyle={{ color: Colors.purple }}
            rounded
            source={require('../../../assets/images/avatar.jpeg')}
            onEditPress={() => console.log('EDIT')}
          />
        </View>
        <View style={styles.wrap}>

          <TextInput placeholder='NAME' />
          <TextInput placeholder='EMAIL' />
          <TextInput placeholder='PASSWORD' secureTextEntry />
          <TextInput placeholder='CONFIRM PASSWORD' secureTextEntry />
          <TextInput placeholder='PHONE' />
          <View style={{ paddingTop: 15, padding: 10 }}>
            <TextCustom size={14} title='GENDER' />
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <CheckBox
              left
              title='MALE'
              iconLeft
              containerStyle={styles.checkBox}
              checkedIcon='check-circle'
              uncheckedIcon='circle-thin'
              uncheckedColor={Colors.purple}
              checkedColor={Colors.purple}
              checked={this.state.male}
              onPress={() => this.setState({ male: !this.state.male })}
            />
            <CheckBox
              right
              title='FEMALE'
              iconLeft
              containerStyle={styles.checkBox}
              checkedIcon='check-circle'
              uncheckedIcon='circle-thin'
              uncheckedColor={Colors.purple}
              checkedColor={Colors.purple}
              checked={this.state.female}
              onPress={() => this.setState({ female: !this.state.female })}
            />
          </View>
          <View style={{ flex: 0.5, justifyContent: 'center' }} />
          <CustomButton
            title='CREATE ACCOUNT'
            gradient
            onPress={() => this.props.navigation.navigate('Feed')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center', alignSelf: 'center', width: 150, height: 100,
  },
  wrap: {
    flex: 1, paddingHorizontal: 20, alignContent: 'flex-start',
  },
  checkBox: {
    backgroundColor: 'white', borderColor: 'white',
  },
});
