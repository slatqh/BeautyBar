import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Avatar, CheckBox, Rating } from 'react-native-elements';
import { ProfileInput, TextCustom, CustomButton } from '../../Components';
import Colors from '../../../constans/Colors';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
      male: false,
      female: false,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@gmail.com',
      password: '',
      confirmPassword: '',
      phone: '',

    };
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        bounces={false}
      >
        <View style={styles.topContainer}>
          <Avatar
            containerStyle={{ alignSelf: 'center' }}
            avatarStyle={{ backgroundColor: 'skyblue' }}
            icon={{ name: 'user', type: 'font-awesome' }}
            size='large'
            rounded
            source={require('../../../assets/images/avatar.jpeg')}
          />
          <Rating
            type='custom'
            imageSize={15}
            style={{ marginVertical: 8 }}
          />
          <Text style={styles.raiting}> 4.62 raiting</Text>
        </View>
        <View style={styles.wrap}>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',

          }}
          ><View style={{ flex: 1 }}>
              <ProfileInput

                label={this.state.firstName}
                editable={this.state.editProfile}
                onChangeText={(e) => this.setState({ name: e })}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <ProfileInput

                label={this.state.lastName}
                editable={this.state.editProfile}
                onChangeText={(e) => this.setState({ name: e })}
              />
            </View>
          </View>
          <ProfileInput
            label={this.state.email}
            editable={this.state.editProfile}
            onChangeText={(e) => this.setState({ email: e })}
          />
          <ProfileInput
            label='********'
            editable={this.state.editProfile}
            onChangeText={(e) => this.setState({ password: e })}
          />
          <ProfileInput
            label='********'
            editable={this.state.editProfile}
            onChangeText={(e) => this.setState({ confirmPassword: e })}
          />
          <ProfileInput
            label='347-777-7777'
            editable={this.state.editProfile}
            onChangeText={(e) => this.setState({ phone: e })}
          />
          <View style={{ paddingTop: 15, padding: 10 }}>
            <TextCustom size={14} title='GENDER' />
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <CheckBox
              left
              title='MALE'
              titleProps={{ style: styles.checkBoxTitle }}
              iconLeft
              containerStyle={styles.checkBox}
              checkedIcon='check-circle'
              uncheckedIcon='circle-thin'
              uncheckedColor={Colors.purple}
              checkedColor={Colors.purple}
              checked={this.state.male}
              onPress={() => this.setState({ male: true, female: false })}
            />
            <CheckBox
              right
              title='FEMALE'
              iconLeft
              titleProps={{ style: styles.checkBoxTitle }}
              containerStyle={styles.checkBox}
              checkedIcon='check-circle'
              uncheckedIcon='circle-thin'
              uncheckedColor={Colors.purple}
              checkedColor={Colors.purple}
              checked={this.state.female}
              onPress={() => this.setState({ female: true, male: false })}
            />
          </View>
          <View style={{ flex: 0.5, justifyContent: 'center' }}>
            <CustomButton
              gradient={this.state.editProfile}
              style={{ marginTop: 20 }}
              border={!this.state.editProfile}
              title={this.state.editProfile ? 'SAVE' : 'EDIT PROFILE'}
              titleColor={Colors.purple}
              onPress={() => this.setState({ editProfile: !this.state.editProfile })}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.8, justifyContent: 'center', alignItems: 'center',
  },
  buttonContainer: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Colors.purple,
    margin: 20,
  },
  buttonTitle: {
    color: Colors.purple,
    paddingVertical: 15,
    alignSelf: 'center',
    fontFamily: 'montserrat-medium',
    fontSize: 15,
    letterSpacing: 1,
  },
  wrap: {
    flex: 2,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
    // alignContent: 'flex-start',
  },
  checkBox: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  raiting: {
    color: Colors.grey,
    fontFamily: 'montserrat',
    fontSize: 12,
  },
  checkBoxTitle: {
    color: Colors.grey,
    letterSpacing: 1,
  },
});
