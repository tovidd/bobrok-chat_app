import React, { Component } from 'react';  
import { 
    AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';

export default class ChatScreen extends Component {  

    constructor(props){
        super(props);
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
          <View style={{height: 10, width: "100%", opacity: 0, }} />  
        );  
    };

    render() {
        const { navigation } = this.props;
        const temp1= {
            user: {
                id: 555,
                username: 'XXX'
            },
            sender: {
                message: 'XXX XXX XXX XXX'
            }, 
            recipient: {
                message: 'XXX XXX XXX XXX'
            }
        };
        const temp= {nama: 'ruby', chat: {dia: {pesan: 'hi ruby', tanggal: '11/11/11'}, dia:{pesan: 'apa kabar ruby,?', tanggal: '30/08/19'}}, foto: require('./../images/ruby.jpg'), pesan_baru: 4};
        const items= navigation.getParam('items', temp1);
        return ( 
            <View style={styles.container}>
                <Image source={{uri: items.user.pic}} style={styles.photo} />
                <View style={{backgroundColor: 'gray', maxWidth: '80%', alignItems: 'center', alignSelf: 'center', top: 10, borderRadius: 30}}>
                    <Text style={{color: 'white', fontSize: 10, padding: 5, paddingRight: 10, paddingLeft: 10, textAlign: 'center'}}>this messages has the best secure encryption, but you must keep yourself in a way don't share your chat with anothers</Text>
                </View>

                <View style={{height: 30}}></View>

                {
                    items.sender == null ? null : 
                    <FlatList  
                        style={{backgroundColor: 'green', flexShrink: 1}}
                        data={items.sender}
                        renderItem={({item})=> 
                            <View style={{left: 5, maxWidth: '70%', alignSelf: 'flex-start',}}>
                                <View style={{backgroundColor: 'black', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center'}}>
                                    <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'yellow', textAlign: 'justify'}}>{item.message}</Text>
                                </View>
                            </View>
                        }
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item, index)=> item.id}
                    />
                }

                <View style={{height: 5}}></View>

                {
                    items.recipient == null ? null : 
                    <FlatList  
                        style={{backgroundColor: 'red', flexShrink: 1}}
                        data={items.recipient}
                        renderItem={({item})=> 
                            <View style={{maxWidth: '70%', right: 5, alignSelf: 'flex-end'}}>
                                <View style={{backgroundColor: 'yellow', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center', }}>
                                    <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'black', textAlign: 'justify'}}>{item.message},?</Text>
                                </View>
                            </View>
                        }
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item, index)=> item.id}
                    />
                }


                {/* <View style={{height: 30}}></View>

                <View style={{left: 5, maxWidth: '70%', alignSelf: 'flex-start'}}>
                    <View style={{backgroundColor: 'black', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center'}}>
                        <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'yellow', textAlign: 'justify'}}>{items.chat.dia.pesan}</Text>
                    </View>
                </View>

                <View style={{height: 5}}></View>

                <View style={{maxWidth: '70%', right: 5, alignSelf: 'flex-end'}}>
                    <View style={{backgroundColor: 'yellow', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center', }}>
                        <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'black', textAlign: 'justify'}}>Kabar baik, kamu gimana {items.nama},?</Text>
                    </View>
                </View>

                <View style={{height: 5}}></View>

                <View style={{left: 5, maxWidth: '70%', alignSelf: 'flex-start'}}>
                    <View style={{backgroundColor: 'black', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center'}}>
                        <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'yellow', textAlign: 'justify'}}>Aku baik baik aja, aku kangen kamu, temenin aku makan yuk!!</Text>
                    </View>
                </View>

                <View style={{height: 5}}></View>

                <View style={{left: 5, maxWidth: '70%', alignSelf: 'flex-start'}}>
                    <View style={{backgroundColor: 'black', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center'}}>
                        <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'yellow', textAlign: 'justify'}}>Cepetan donk aku laper, cepetaaaannnnnnnnn!!</Text>
                    </View>
                </View> */}

            </View>
        );
    } 
}
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        width: '100%', 
        height: '100%',
        backgroundColor: '#333333',
    },
    photo: {
        width: '100%',
        height: '100%', 
        position: 'absolute'
    }
})  
  