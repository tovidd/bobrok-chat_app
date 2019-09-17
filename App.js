//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
//import Ionicons to show the icon for bottom options
//For React Navigation 2.+ import following
//import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator,
} from 'react-navigation-stack'; 
import {
    createBottomTabNavigator,
} from 'react-navigation-tabs';
// import { Icon } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

//import createStackNavigator, createBottomTabNavigator, createAppContainer in our project
import StoreScreen from './pages/StoreScreen';
import SettingsScreen from './pages/SettingsScreen';
import ChatScreen from './pages/ChatScreen';
import ProfileScreen from './pages/ProfileScreen';
import FriendsScreen from './pages/FriendsScreen';




export default class App extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}

const FriendsStack= createStackNavigator(
  {
      Friends: { 
        screen: FriendsScreen, 
        navigationOptions: {
          title: 'Bobrok Friends', 
        }
      },
      Chat: { 
        screen: ChatScreen,
        navigationOptions: {
          title: 'Bobrok Chats', 
          header: null, 
        },
      },
  },
);

FriendsStack.navigationOptions= ({navigation})=> {
  let tabBarVisible= true;
  if(navigation.state.index > 0)
  {
    tabBarVisible= false;
  }
  return {
    tabBarVisible,
  };
};

const StoreStack= createStackNavigator(
  {
    Store: { screen: StoreScreen },
  },
  {
    defaultNavigationOptions: {
      title: 'Bobrok Store',
      headerStyle: {
          backgroundColor: 'yellow',
      },
      headerTintColor: 'black',
      headerTintStyle: {
          fontWeight: 'bold',
      },
      headerMode: "float",
    },
  }
);

const SettingsStack= createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      title: 'Bobrok Settings',
    },
  }
);

const Nav= createBottomTabNavigator(
  {
    Friends: { screen: FriendsStack },
    Store: { screen: StoreStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent= FontAwesome5;
        let iconName;
        if (routeName === 'Friends') {
          iconName = `user-friends${focused ? '' : ''}`;
        } else if (routeName === 'Store') {
          iconName = `search-dollar${focused ? '' : ''}`;
        } else if (routeName === 'Settings') {
          iconName = `user-circle${focused ? '' : ''}`;
        }
        
        return <IconComponent name={iconName} size={25} color={tintColor} />; 
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black', 
      inactiveTintColor: 'black',
      activeBackgroundColor: 'yellow',
      inactiveBackgroundColor: 'gray',
    }, 
  },
);

const AppContainer= createAppContainer(Nav);
