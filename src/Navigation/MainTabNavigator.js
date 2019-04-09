import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { TabIcon } from '../Components';
import {
  AuthMain,
  Login,
  CreateAccount,
  FeedScreen,
  FeedDetails,
  About,
  Reviews,
  BookingScreen,
  BookingDetails,
  BookingTab,
  Profile,
  Settings,
} from '../Screens';
import Colors from '../../constans/Colors';

export const AuthStack = createStackNavigator({
  Auth: AuthMain,
  Login,
  Signup: CreateAccount,
}, {
  defaultNavigationOptions: {
    header: null,
  },
  initialRouteName: 'Signup',
});

const FeedStack = createStackNavigator({
  FeedMain: FeedScreen,
  FeedDetails,
  About,
  Reviews,
  BookingScreen,
  BookingDetails,
}, {
  initialRouteName: 'FeedMain',
  defaultNavigationOptions: {
    header: null,
  },
  navigationOptions: () => ({
    tabBarIcon: ({ focused }) => <TabIcon name='feed' active={focused} />,
  }),
});

const BookingStack = createStackNavigator({
  BookingTab,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitle: 'BOOKINGS',
    headerTintColor: Colors.purple,
    headerTitleStyle: {
      fontSize: 22,
      letterSpacing: 1,
      fontFamily: 'montserrat-medium',
      fontWeight: '300',
    },
  },
  navigationOptions: () => ({
    tabBarIcon: ({ focused }) => <TabIcon name='booking' active={focused} />,
  }),
});

const ProfileStack = createStackNavigator({
  Profile,
}, {
  defaultNavigationOptions: {
    header: null,
  },
  navigationOptions: () => ({
    tabBarIcon: ({ focused }) => <TabIcon name='profile' active={focused} />,
  }),
});

const SettingsStack = createStackNavigator({
  Settings,
}, {
  defaultNavigationOptions: {
    header: null,
  },
  navigationOptions: () => ({
    tabBarIcon: ({ focused }) => <TabIcon name='settings' active={focused} />,
  }),
});

export const App = createBottomTabNavigator({
  Feed: FeedStack,
  Booking: BookingStack,
  Profile: ProfileStack,
  Settings: SettingsStack,
}, {
  initialRouteName: 'Feed',
  tabBarOptions: {
    activeTintColor: Colors.purple,
    labelStyle: () => styles.labelStyle,
    // tabStyle: { overflow: 'visible' },
    style: () => styles.container,
  },
});

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'montserrat',
    textTransform: 'uppercase',
  },
  container: {
    height: 55,
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
;
