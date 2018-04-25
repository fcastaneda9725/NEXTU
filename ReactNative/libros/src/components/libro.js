import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Cards from './cards';
import CardSection from './cardSection';
import Boton from './boton';

export default class Libro extends Component {
  render () {
    return (
      <Cards>

        <CardSection>
          <Text> Primer Libro </Text>
        </CardSection>

        <CardSection>
          <Boton textoBoton='Ver más' />
        </CardSection>

      </Cards>
    );
  }
};
