import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './src/components/cards';
import CardSection from './src/components/cardSection';
import Libro from './src/components/libro';

export default class App extends Component {
  render () {
    return (
       <View>

          <Libro />
          
       </View>
     );
  }
};
