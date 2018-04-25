import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Boton extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.estiloBoton}>
        <Text style={styles.estiloTexto}>{this.props.textoBoton}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  estiloBoton: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#acacac',
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  },
  estiloTexto: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
});
