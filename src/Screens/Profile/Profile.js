import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Avatar, CheckBox, Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import { updateProfile } from '../Auth/action'
import { ProfileInput, TextCustom, CustomButton, LoadingStatus } from '../../Components';
import Colors from '../../../constans/Colors';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
      male: false,
      female: false,
      gender: null,
      firstName: null,
      lastName: null,
      email: null,
      password: '',
      confirmPassword: '',
      phone: '',

    };
  }

  componentDidMount(){
    const { user } = this.props;

    if(user.gender === 'MALE'){
      this.setState({ male: true})
    } else {
      this.setState({ female: true})
    }
    this.setState({
      firstName: user.name,
      lastName: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender

    })
  }
  async updateProfile(){
    const {firstName, lastName, email, password, confirmPassword, phone, gender } = this.state;
    let name = firstName;
    await this.props.updateProfile({name, lastName, email, phone, gender})
    this.setState({ editProfile: false})
  }
  render() {
    const { user, loading } = this.props;
    const { editProfile } = this.state;
    if(loading){
      return <LoadingStatus loading />
    }
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
                editable={editProfile}
                onChangeText={(e) => this.setState({ firstName: e })}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <ProfileInput
                label={this.state.lastName}
                editable={editProfile}
                onChangeText={(e) => this.setState({ lastName: e })}
              />
            </View>
          </View>
          <ProfileInput
            label={this.state.email}
            editable={editProfile}
            onChangeText={(e) => this.setState({ email: e })}
          />
          <ProfileInput
            label='********'
            editable={editProfile}
            onChangeText={(e) => this.setState({ password: e })}
          />
          <ProfileInput
            label='********'
            editable={editProfile}
            onChangeText={(e) => this.setState({ confirmPassword: e })}
          />
          <ProfileInput
            label={this.state.phone}
            editable={editProfile}
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
              onPress={() => editProfile?
                this.setState({ male: true, female: false, gender: 'MALE' }) :
                null
              }
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
              onPress={() => editProfile?
                this.setState({ female: true, male: false, gender: 'FEMALE' }) :
                null
              }
            />
          </View>
          <View style={{ flex: 0.5, justifyContent: 'center' }}>
            <CustomButton
              gradient={editProfile}
              style={{ marginTop: 20 }}
              border={!this.state.editProfile}
              title={this.state.editProfile ? 'SAVE' : 'EDIT PROFILE'}
              titleColor={Colors.purple}
              onPress={() => editProfile ? this.updateProfile() : this.setState({ editProfile: !this.state.editProfile })}
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


const mapStateToProps = ({ Auth }) => {
  const { user, loading } = Auth;
  return { user, loading }
}

export default connect(mapStateToProps, { updateProfile })(Profile)