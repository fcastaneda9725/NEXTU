import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Encabezado from '.src/lib/encabezado';

export default class App extends Component {
  render() {
    return (
      <View>
        <Encabezado tituloEncabezado="Inicio"/>
      </View>
    );
  }
}
