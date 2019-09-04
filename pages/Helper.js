import React from 'react';
import {View} from 'react-native';



export default class Helper extends React.Component{
    constructor(){
        super();
        this.state= {
            BASE_URL: 'http://192.168.43.104:81',
            BASE_URL_IMAGE: 'http://192.168.43.104:81/bobrok/images/',
            ID_USER: 1, 
        }
    }

    getBaseUrl= ()=> {
        return this.state.BASE_URL;
    }

    getBaseUrlImage= ()=> {
        return this.state.BASE_URL_IMAGE;
    }

    getIdUser= ()=> {
        return this.state.ID_USER;
    }

    render(){
        return(
            ''
        )
    }

}