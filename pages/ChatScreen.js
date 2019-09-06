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
        const temp2= {
            user: {
                id: 555,
                username: 'XXX'
            },
            chat: {
                message: 'XXX XXX XXX XXX'
            }, 
        };
        // const items= navigation.getParam('items', temp1);
        const items= navigation.getParam('items', temp2);
        return ( 
            <View style={styles.container}>
                <Image source={{uri: items.user.pic}} style={styles.photo} />
                <View style={{backgroundColor: 'gray', maxWidth: '80%', alignItems: 'center', alignSelf: 'center', top: 10, borderRadius: 30}}>
                    <Text style={{color: 'white', fontSize: 10, padding: 5, paddingRight: 10, paddingLeft: 10, textAlign: 'center'}}>this messages has the best secure encryption, but you must keep yourself in a way don't share your chat with anothers</Text>
                </View>

                <View style={{height: 30}}></View>

                {
                    items.chat == null ? null : 
                    <FlatList  
                        style={{flexShrink: 1}}
                        data={items.chat}
                        renderItem={({item})=> 
                            item.id_recipient == 1 ? 
                                <View style={{left: 5, maxWidth: '70%', alignSelf: 'flex-start', flexDirection: 'row'}}>
                                    <View style={{backgroundColor: 'black', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center'}}>
                                        <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'yellow', textAlign: 'justify'}}>{item.message}</Text>
                                    </View>
                                    <View style={{height: '100%'}}>
                                        <Text style={{position: 'absolute', bottom: 0, color: 'white', borderColor: 'black'}}>{(item.created_at).substring(0, 10)}</Text>
                                    </View>
                                </View> 
                                : item.id_sender == 1 ? 
                                <View style={{maxWidth: '70%', right: 5, alignSelf: 'flex-end', flexDirection: 'row'}}>
                                    <View style={{height: '100%'}}>
                                        <Text style={{position: 'absolute', bottom: 0, right: 0, color: 'white', borderColor: 'black'}}>{(item.created_at).substring(0, 10)}</Text>
                                    </View>
                                    <View style={{backgroundColor: 'yellow', borderRadius: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center', }}>
                                        <Text style={{padding: 10, paddingRight: 15, paddingLeft: 15, color: 'black', textAlign: 'justify'}}>{item.message},?</Text>
                                    </View>
                                </View> 
                                : null
                        }
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item, index)=> item.id}
                    />
                }

                <View style={{height: 5}}></View>


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
  