import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './lib';

export default class ItemLista extends Component {
  render() {
    return (
      <CardSection>
        <Text style={ styles.nombreStyle }>
          { this.props.frutaInfo.nombre }
        </Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  nombreStyle: {
    fontSize: 20,
    paddingLeft: 5,
  },
});
