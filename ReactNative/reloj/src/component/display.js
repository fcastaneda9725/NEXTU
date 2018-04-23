import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Display extends Component {
  render() {
    return (
      <View style={styles.contenedorExterior}>
        <View>
          <View style={styles.contenedorCiudad}>
            <Text style={styles.ciudadTexto}>{this.props.ciudad}</Text>
            </View>
            <View style={styles.contenedorHoraFecha}>
            <Text style={styles.horaTexto}>{this.props.hora}</Text>
            </View>
            <View style={styles.contenedorHoraFecha}>
            <Text style={styles.fechaTexto}>{this.props.fecha}</Text>
            </View>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenedorExterior: {
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
    },
  contenedorCiudad: {
      alignItems: 'flex-end',
    },
  contenedorHoraFecha: {
      alignItems: 'center',
    },
  ciudadTexto: {
      fontSize: 13,
    },
  horaTexto: {
      fontSize: 50,
    },
  fechaTexto: {
      fontSize: 30,
    },
});
