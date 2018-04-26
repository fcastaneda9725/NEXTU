import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cards from './cards';
import CardSection from './cardSection';
import Boton from './boton';

export default class Libro extends Component {
  render () {
    return (
      <Cards>

        <CardSection>
          <Text style={styles.tituloStyle}> {this.props.libroData.volumeInfo.title} </Text>
          <Text style={styles.autorStyle}> {this.props.libroData.volumeInfo.authors[0]} </Text>
        </CardSection>

        <CardSection>
          <Boton textoBoton='Ver más' />
        </CardSection>

      </Cards>
    );
  }
};

const styles = StyleSheet.create({
  tituloStyle: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
      },
  autorStyle: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: '#b1b1b1',
      },
});
