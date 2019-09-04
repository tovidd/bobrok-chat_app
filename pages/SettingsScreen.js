//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
//import all the basic component we have used
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Helper from './Helper';
 
export default class SettingsScreen extends React.Component {
  //Setting Screen to show in Setting Option
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', }}>
        <View style={styles.profile}>
          {/* <Image style={styles.photo} source={require('./../images/profile.jpg')} /> */}
          <Image style={styles.photo} source={{uri: 'http://192.168.43.104:81/bobrok/images/react-native.jpg'}} />
          <View style={styles.wallet}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white', opacity: 0.7, borderRadius: 50}}></View>
            <Text style={{fontSize: 25, fontWeight: 'bold', position: 'absolute'}}>$100</Text>
          </View>
          <View style={styles.rating}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white', opacity: 0.7, borderRadius: 50}}></View>
            <Text style={{fontSize: 25, fontWeight: 'bold', position: 'absolute'}}>★4.7</Text>
          </View>
        </View>
        
        
        <View
          style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text>Open Detail Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Text>Open Profile Screen</Text>
          </TouchableOpacity>
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