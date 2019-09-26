import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Index from './src/screens/Index';
import Login from './src/screens/Login';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Авторизация',
        headerStyle: {
          backgroundColor: '#1E1E22',
        },
        headerTintColor: '#fff'
      }
    },
    Index: { screen: Index, navigationOptions: {
      header: null
    }    
  }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'screen',
    defaultNavigationOptions: {
      title: null
    }
  }
);

export default createAppContainer(navigator);
