import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BarraInferior extends Component {
  render () {
    return (
      <View style={styles.contenedorPrincipal}>
        <TouchableOpacity style={styles.botonMenu}>
          <Icon name={this.props.uno} size={35} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonMenu}>
          <Icon name={this.props.dos} size={35} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonMenu}>
          <Icon name={this.props.tres} size={35} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonMenu}>
          <Icon name={this.props.cuatro} size={35} color="#fff"/>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    height: 67,
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  botonMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
});
