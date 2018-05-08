import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Encabezado, Boton, Spinner } from './lib';
import Formulario from './formulario';

export default class App extends Component {
  state = { sesionIniciada: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBqdCa7ny1R7jrwiaTTvLA-U1tjp34WkK4',
        authDomain: 'login-2517e.firebaseapp.com',
        databaseURL: 'https://login-2517e.firebaseio.com',
        projectId: 'login-2517e',
        storageBucket: 'login-2517e.appspot.com',
        messagingSenderId: '683465112972',
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ sesionIniciada: true });
      } else {
        this.setState({ sesionIniciada: false });
      }
    });
  }

  contenidoSegunSesion() {
    switch (this.state.sesionIniciada) {

      case true:
        return (
          <View style={{ height: 35 }}>
            <Boton
              texto= { 'Cerrar Sesión' }
              onPress= { () => firebase.auth().signOut() }
            />
          </View>
        );
        break;

      case false:
        return (
          <Formulario />
        );
        break;

      default:
        return (
          <Spinner size={ 'large' } />
        );
    }
  }

  render() {
    return (
      <View>
        <Encabezado tituloEncabezado={ 'Login App' } />
        { this.contenidoSegunSesion() }
      </View>
    );
  }
}
