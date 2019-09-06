
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import { Icon, List, ListItem, Badge } from 'react-native-elements';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Helper from './Helper'; 

export default class SettingsScreen extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      dataSource: null, 
      isLoading: false,
      base_url: 'http://192.168.43.104:81/bobrok/',
      base_url_image: 'http://192.168.43.104:81/bobrok/images/'
    }
  };

  static navigationOptions= {
    headerStyle: {
        backgroundColor: 'yellow',
    },
    headerTintColor: 'black',
    headerTintStyle: {
        fontWeight: 'bold',
    },
    headerMode: "float",
    headerRight: (
      <Icon name='dots-three-vertical' type='entypo' size={20} color="black" iconStyle={{padding: 18, alignSelf: 'center'}} underlayColor='yellow' onPress={()=> {Alert.alert('Wallet', '$100')}} />
    ),
  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', }}>
        <View style={styles.profile}>
          <Image style={styles.photo} source={{uri: this.state.base_url_image+'android.jpg'}} />
          <View style={styles.wallet}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white', opacity: 0.7, borderRadius: 50}}></View>
            <Text style={{fontSize: 25, fontWeight: 'bold', position: 'absolute'}}>$101</Text>
          </View>
          <View style={styles.rating}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white', opacity: 0.7, borderRadius: 50}}></View>
            <Text style={{fontSize: 25, fontWeight: 'bold', position: 'absolute'}}>★4.7</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  profile: {
    width: '80%',
    height: Dimensions.get('screen').width*0.8,
    alignSelf: 'center',
    top: 5,
  },
  photo: {
    height: '100%', 
    width: '100%',
    borderRadius: 150, 
    borderColor: 'yellow', 
    borderWidth: 1, 
  },
  wallet: {
    flex: 1,
    height: 100, 
    width: 100, 
    position: 'absolute', 
    bottom: 50, 
    left: -30, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  rating: {
    flex: 1,
    height: 70, 
    width: 70, 
    position: 'absolute', 
    bottom: 10, 
    left: 25, 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});