//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Alert, Image, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icon } from 'react-native-elements';
// import console = require('console');
 
export default class FriendsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {nama: 'Android', chat: {dia: {pesan: 'hi android', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar  android,?', tanggal: '4:20 P.M'}}, foto: require('./../images/android.jpg'), pesan_baru: 3}, 
        {nama: 'iOS', chat: {dia: {pesan: 'hi ios', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar ios,?', tanggal: '07:23 A.M'}}, foto: require('./../images/ios.jpg'), pesan_baru: 1}, 
        {nama: 'Java', chat: {dia: {pesan: 'hi java', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar java,?', tanggal: '01/09/19'}}, foto: require('./../images/java.jpg'), pesan_baru: 13}, 
        {nama: 'Swift', chat: {dia: {pesan: 'hi swift', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar swift,?', tanggal: '01/09/19'}}, foto: require('./../images/swift.jpg'), pesan_baru: 3},  
        {nama: 'Php', chat: {dia: {pesan: 'hi php', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar php,?', tanggal: '31/08/19'}}, foto: require('./../images/php.jpg'), pesan_baru: 6}, 
        {nama: 'Hadoop', chat: {dia: {pesan: 'hi hadoop', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar hadoop,?', tanggal: '30/08/19'}}, foto: require('./../images/hadoop.jpg'), pesan_baru: 36}, 
        {nama: 'flutter', chat: {dia: {pesan: 'hi flutter', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar flutter,?', tanggal: '30/08/19'}}, foto: require('./../images/flutter.jpg'), pesan_baru: 193}, 
        {nama: 'golang', chat: {dia: {pesan: 'hi golang', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar golang,?', tanggal: '30/08/19'}}, foto: require('./../images/golang.jpg'), pesan_baru: 1}, 
        {nama: 'kotlin', chat: {dia: {pesan: 'hi kotlin', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar kotlin,?', tanggal: '30/08/19'}}, foto: require('./../images/kotlin.jpg'), pesan_baru: 2}, 
        {nama: 'prolog', chat: {dia: {pesan: 'hi prolog', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar prolog,?', tanggal: '30/08/19'}}, foto: require('./../images/prolog.jpg'), pesan_baru: 2}, 
        {nama: 'python', chat: {dia: {pesan: 'hi python', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar python,?', tanggal: '30/08/19'}}, foto: require('./../images/python.jpg'), pesan_baru: 5789}, 
        {nama: 'react-native', chat: {dia: {pesan: 'hi react-native', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar react-native,?', tanggal: '30/08/19'}}, foto: require('./../images/react-native.jpg'), pesan_baru: 1}, 
        {nama: 'ruby', chat: {dia: {pesan: 'hi ruby', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar ruby,?', tanggal: '30/08/19'}}, foto: require('./../images/ruby.jpg'), pesan_baru: 4}, 
      ],
      dataSource: null, 
      isLoading: false,
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

  renderSeparator = () => {  
    return (  
      <View style={{height: 1, width: "100%", backgroundColor: "red"}} />  
    );  
  };

  componentDidMount(){
    return fetch('http://192.168.43.104:81/bobrok/api/user')
          .then((response)=> response.json())
          .then((responseJson)=> {
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            })
          })
          .catch((error)=> {
            console.log(error);
          });
  }

  render() {
    return (
      <View style={{backgroundColor: '#333333', height: '100%', width: '100%'}}> 
        <View>
          <View style={{height: 1, width: "100%", backgroundColor: "red", top: 1, zIndex: 1}} />
          <FlatList  
              // data={this.state.data}
              data={this.state.dataSource}
              renderItem={({item})=> 
                <TouchableOpacity style={{backgroundColor: 'black'}} 
                onPress={() => this.props.navigation.navigate('Chat', {items: item,})}>
                  <View style={styles.chat}>
                    <View style={styles.profile}>
                      <Image style={styles.photo} source={{uri: item.user.pic}} />
                    </View>
                    <View style={styles.tulisan}>
                      <Text style={styles.nama}>{item.user.username}</Text>
                      <Text style={styles.konten} >{item.sender.message}</Text>
                    </View>
                    <View style={styles.tanggal}>
                      <Text style={{fontSize: 14, padding: 8, color: 'gray', bottom: -5, right: 0}}>{item.sender.created_at}</Text>
                      <View  style={{padding: 8, top: -5, right: 0, alignSelf: 'flex-end'}}> 
                        {item.user.unread <= 0 ? null : <Text style={{borderRadius: 30, backgroundColor: '#3fd62a', padding: 5, minWidth: 25, textAlign: 'center'}}>{item.user.unread}</Text> }
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={(item, index)=> item.user.id}
          />
          <View style={{height: 1, width: "100%", backgroundColor: "red", bottom: 2}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {  
    flex: 1,
  },  
  nama: {  
    padding: 2,  
    fontSize: 16,
    color: 'white'
  },
  konten: {  
    padding: 2,  
    fontSize: 16,
    color: 'gray' 
  },
  chat: {
    flex: 1, 
    flexDirection: 'row', 
    height: 80,
  },
  photo: {
    height: '100%', 
    width: '100%',
    borderRadius: 50, 
    borderColor: 'yellow', 
    borderWidth: 1, 
  },
  profile: {
    width: 60,
    height: 60,
    left: 10,
    right: 10,
    top: 10,
    bottom: 10, 
    justifyContent: 'center', 
  },
  tulisan: {
    left: 30,
    justifyContent: 'center', 
    minWidth: Dimensions.get('screen').width*0.4,
  },
  tanggal: {
    right: 10,
    position: 'absolute',
  },
});

// https://www.javatpoint.com/react-native-flatlist
// https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8