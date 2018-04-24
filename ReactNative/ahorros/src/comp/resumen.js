import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Resumen extends Component {
  render () {
    return (
      <View style={styles.contenedorPrincipal}>
        <View style={styles.contenedorDos}>
          <Text style={styles.textoDescriptivo}>Tus Ahorros</Text>
              <View style={styles.botonAhorros}>
                  <Icon name="lock" size={40} color="#fff" />
                  <Text style={styles.numeros}>$860.00</Text>
              </View>
        </View>
        <View style={styles.contenedorDos}>
          <Text style={styles.textoDescriptivo}>Deudas</Text>
              <View style={styles.botonDeudas}>
                  <Icon name="book" size={40} color="#fff" />
                  <Text style={styles.numeros}>$320.00</Text>
              </View>
        </View>
        <View style={styles.contenedorDos}>
          <Text style={styles.textoDescriptivo}>Lista de Deseo</Text>
              <View style={styles.botonLista}>
                  <Icon name="star" size={40} color="#fff" />
                  <Text style={styles.numeros}>$950.00</Text>
              </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    padding: 40,
    marginTop: 30,
    justifyContent: 'space-around',
  },
  contenedorDos: {
    paddingBottom: 50,
  },
  textoDescriptivo: {
    height: 20,
    fontSize: 14,
  },
  botonAhorros: {
    height: 70,
    padding: 10,
    borderWidth: 2,
    borderColor: '#bff8bf',
    backgroundColor: '#2f812f',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botonDeudas: {
    height: 70,
    padding: 10,
    borderWidth: 2,
    borderColor: '#f8bfbf',
    backgroundColor: '#cd2d2d',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botonLista: {
    height: 70,
    padding: 10,
    borderWidth: 2,
    borderColor: '#f8f6bf',
    backgroundColor: '#ead92d',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numeros: {
    fontSize: 30,
    color: '#fff',
  },
});
