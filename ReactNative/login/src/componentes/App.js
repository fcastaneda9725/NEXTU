import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Encabezado, Boton } from './lib';

export default class App extends Component {
  render() {
    return (
      <View>
        <Encabezado tituloEncabezado={ 'Login App' } />
        <Text> Soy un componente feo </Text>
        <Boton texto={ 'prueba' } />
      </View>
    );
  }
}
