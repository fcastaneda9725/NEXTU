import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Encabezado } from './src/componentes/lib';
import ListaFrutas from './src/componentes/componentesFrutas';

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers) }>

        <View style={{ flex: 1 }}>

          <Encabezado tituloEncabezado={ 'Frutas' } />
          <ListaFrutas />

        </View>

      </Provider>
    );
  }
}
