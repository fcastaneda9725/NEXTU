import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Titulo extends Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>{this.props.textoTitulo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 30,
    color: '#717171',
  },
  viewStyles: {
    backgroundColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});
