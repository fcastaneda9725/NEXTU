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

        <View>

          <Encabezado tituloEncabezado={ 'Frutas' } />
          <ListaFrutas />

        </View>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
