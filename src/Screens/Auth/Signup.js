
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, Dimensions, Alert } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { CustomButton, TextInput, TextCustom } from '../../Components';
import { signUp } from './action';
import Colors from '../../../constans/Colors';
import { User } from '../../../api/User';

const { height } = Dimensions.get('window');
const HEADER = height / 8;

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: null,
      female: null,
      gender: null,
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      phone: null,
      error: null,
      nameError: false,
      emailError: false,
      passwordError: false,
      passwordConfirmError: false,
      genderError: false,
    };
  }

  checkInputs() {
    const { name, email, password, confirmPassword, gender } = this.state;
    if (name === null || name.length < 1) {
      this.setState({ nameError: true });
      return;
    } else if (email === null || email.length < 1) {
      this.setState({ emailError: true });
      return;
    } else if (password === null || password.length < 7) {
      this.setState({ passwordError: true });
      return;
    } else if (password !== confirmPassword) {
      Alert.alert(
        'Password not match',
        null,
        [

          { text: 'OK' },
        ],
        { cancelable: false },
      );
      return;
    } else if (gender === null) {
      this.setState({ genderError: true });
    } else {
      this.createAccount();
    }
  }
  async createAccount() {
    const { name, email, password, gender, phone } = this.state;
    await this.props.signUp({
      name,
      email,
      password,
      gender,
      phone,
    });
    this.props.navigation.navigate(this.props.isLoggin ? 'App' : 'Signup');
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

          <TextInput
            placeholder='NAME'
            label='name'
            onChangeText={(e) => this.setState({ name: e, nameError: false })}
            error={!!this.state.nameError}
          />
          <TextInput
            label='email'
            placeholder='EMAIL'
            onChangeText={(e) => this.setState({ email: e, emailError: false })}
            error={!!this.state.emailError}
          />
          <TextInput
            label='password'
            placeholder='PASSWORD'
            secureTextEntry
            onChangeText={(e) => this.setState({ password: e, passwordError: false })}
            password={!!this.state.passwordError}
          />
          <TextInput
            placeholder='CONFIRM PASSWORD'
            secureTextEntry
            onChangeText={(e) => this.setState({ confirmPassword: e, passwordConfirmError: false })}
          />
          <TextInput
            placeholder='PHONE'
            onChangeText={(e) => this.setState({ phone: e })}
          />
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
              onPress={() => this.setState({ male: true, female: false, gender: 'MALE' })}
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
              onPress={() => this.setState({ female: true, male: false, gender: 'FEMALE' })}
            />

          </View>
          {
            this.state.genderError === true ? <Text style={styles.error}>Please select gender</Text> : <View />
          }
          {
            this.props.error.length ? <Text style={styles.error}>{this.props.error}</Text> : null
          }
          <View style={{ flex: 0.5, justifyContent: 'center' }} />
          <CustomButton
            title='CREATE ACCOUNT'
            gradient
            onPress={() => this.checkInputs()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 100,
  },
  wrap: {
    flex: 1,
    paddingHorizontal: 20,
    alignContent: 'flex-start',
  },
  checkBox: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 12,
    fontFamily: 'montserrat',
  },
});

const mapStateToProps = ({ Auth }) => {
  const { loading, isLoggin, error } = Auth;
  return { loading, isLoggin, error };
};

export default connect(mapStateToProps, { signUp })(CreateAccount)
;
