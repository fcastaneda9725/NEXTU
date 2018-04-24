import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Encabezado extends Component {
  render () {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.tituloEncabezado}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 15,
    backgroundColor: '#e1e1e1',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
  },
  textStyle: {
    color: '#000',
    fontSize: 19,
  },
});
