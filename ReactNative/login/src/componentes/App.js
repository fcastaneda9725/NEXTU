import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Encabezado, Boton } from './lib';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBqdCa7ny1R7jrwiaTTvLA-U1tjp34WkK4',
        authDomain: 'login-2517e.firebaseapp.com',
        databaseURL: 'https://login-2517e.firebaseio.com',
        projectId: 'login-2517e',
        storageBucket: 'login-2517e.appspot.com',
        messagingSenderId: '683465112972',
      });
  }

  render() {
    return (
      <View>
        <Encabezado tituloEncabezado={ 'Login App' } />
        <Text> Soy un componente feo </Text>
        <Boton texto={ 'Prueba' }/>
      </View>
    );
  }
}
