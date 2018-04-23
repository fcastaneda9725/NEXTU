import React, { Component } from 'react';
import { View } from 'react-native';
import Encabezado from './src/component/encabezado';
import Display from './src/component/display';

export default class App extends Component {
  render () {
    return (
      <View>
        <Encabezado tituloEncabezado={'Reloj Mundial'}/>
        <Display ciudad={'México'} hora={'12:58 pm'} fecha={'23 de abril'}/>
      </View>
    );
  }
};
