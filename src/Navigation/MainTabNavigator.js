import React from 'react';
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
  ConfirmFinal,
  PastBookings,
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
  initialRouteName: 'Login',
});

const FeedStack = createStackNavigator({
  FeedMain: FeedScreen,
  FeedDetails,
  About,
  Reviews,
  BookingScreen,
  BookingDetails,
  ConfirmFinal,
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
  PastBookings,
}, {
  defaultNavigationOptions: {
    headerLeft: null,
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
    labelStyle: { justifyContent: 'center', marginTop: -5 },
  },
});

