//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Alert, Image, Dimensions, ActivityIndicator } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icon, List, ListItem, Badge, SearchBar } from 'react-native-elements';
// import console = require('console');
 
export default class FriendsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: null, 
      isLoading: true,
      base_url: 'http://192.168.43.104:81/bobrok/',
      base_url_image: 'http://192.168.43.104:81/bobrok/images/', 
      search: '', 
    };
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

  renderHeader= ()=> {
    const { search } = this.state;
    return(
      <SearchBar 
        placeholder="Type any . . . ." DarkTheme round
      />
    );
  };

  keyExtractor= (item, index) => index.toString()

  renderItem= ({ item }) => (
    item.user.id == 1 ? null :
    <ListItem
      onPress={()=> this.props.navigation.navigate('Chat', {items: item,})}
      containerStyle={{backgroundColor: 'black', borderTopWidth: 1, borderColor: 'red'}}
      title={item.user.username}
      titleStyle={{color: 'white'}}
      subtitle={item.user.status}
      subtitleStyle={{color: 'gray'}}
      leftAvatar={{ 
        source: item.user.pic && { uri: item.user.pic }, 
        title: item.user.real_name
      }}
      badge={{ value: item.user.unread, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 }, status: 'success' }}      
      bottomDivider
      chevron
    /> 
  )

  componentDidMount(){
    return fetch(this.state.base_url+'api/user')
          .then((response)=> response.json())
          .then((responseJson)=> {
              this.setState(
              {
                isLoading: false,
                dataSource: responseJson,
              }, 
            )
          })
          .catch((error)=> {
            console.log(error);
          });
  }

  render() {
    return (
        <FlatList
          data= {this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={this.renderHeader}
        />
    );
  }

  Comment(){
  // <View style={{backgroundColor: '#333333', height: '100%', width: '100%'}}> 
  //   <View>
  //     <View style={{height: 1, width: "100%", backgroundColor: "red", top: 1, zIndex: 1}} />
  //     <FlatList  
  //         // data={this.state.data}
  //         data={this.state.dataSource}
  //         renderItem={({item})=> 
  //           <TouchableOpacity style={{backgroundColor: 'black'}} 
  //           onPress={() => this.props.navigation.navigate('Chat', {items: item,})}>
  //             <View style={styles.chat}>
  //               <View style={styles.profile}>
  //                 <Image style={styles.photo} source={{uri: item.user.pic}} />
  //               </View>
  //               <View style={styles.tulisan}>
  //                 <Text style={styles.nama}>{item.user.username}</Text>
  //                 <Text style={styles.konten} >{item.sender.message}</Text>
  //               </View>
  //               <View style={styles.tanggal}>
  //                 <Text style={{fontSize: 14, padding: 8, color: 'gray', bottom: -5, right: 0}}>{item.sender.created_at}</Text>
  //                 <View  style={{padding: 8, top: -5, right: 0, alignSelf: 'flex-end'}}> 
  //                   {item.user.unread <= 0 ? null : <Text style={{borderRadius: 30, backgroundColor: '#3fd62a', padding: 5, minWidth: 25, textAlign: 'center'}}>{item.user.unread}</Text> }
  //                 </View>
  //               </View>
  //             </View>
  //           </TouchableOpacity>}
  //         ItemSeparatorComponent={this.renderSeparator}
  //         keyExtractor={(item, index)=> item.user.id}
  //     />
  //     <View style={{height: 1, width: "100%", backgroundColor: "red", bottom: 2}} />
  //   </View>
  // </View>
  return(
    <View></View>
  );
};
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
// https://react-native-training.github.io/react-native-elements/docs/badge.html