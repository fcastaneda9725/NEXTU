import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Encabezado from '../lib/encabezado';
import BarraInferior from '../lib/barraInferior';
import Resumen from './resumen';

export default class App extends Component {
  render() {
    return (
      <View>
        <Encabezado tituloEncabezado="Inicio" />
        <Resumen />
        <BarraInferior
          uno="home"
          dos="retweet"
          tres="list-ul"
          cuatro="user"
        />
      </View>
    );
  }
}
