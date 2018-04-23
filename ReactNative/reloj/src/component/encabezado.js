import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Encabezado extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Menú</Text>
        <Text style={styles.textStyle}>{this.props.tituloEncabezado}</Text>
        <Text style={styles.textStyle}>Nuevo</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
      paddingTop: 20,
      backgroundColor: '#666',
      height: 70,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 6,
      paddingRight: 6,
    },
  textStyle: {
    color: '#fff',
  },
});
