
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthLoadingScreen } from '../Screens';
import { AuthStack, App } from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App,
},
{
  initialRouteName: 'Auth',
}
));
