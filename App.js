/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {  View, StatusBar } from 'react-native';

import AppWrapper from './app/index';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
          <AppWrapper />
      </View>
    );
  }
}