import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './lib';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ItemLista extends Component {

  mostrarDescripcion () {
    const { expandir, frutaInfo } = this.props;
    if (expandir) {
      return (
        <Text>{ frutaInfo.descripcion } </Text>
      );
    }
  }

  render() {
    const { id, nombre } = this.props.frutaInfo;
    return (
      <TouchableWithoutFeedback
          onPress={ () => this.props.seleccionarFruta(id) }>
        <View>
          <CardSection>
            <Text style={ styles.nombreStyle }>
              { nombre }
            </Text>
          </CardSection>
          {this.mostrarDescripcion()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  nombreStyle: {
    fontSize: 20,
    paddingLeft: 5,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expandir = state.idFrutaSeleccionada === ownProps.frutaInfo.id;
  return { expandir: expandir };
};

export default connect(mapStateToProps, actions)(ItemLista);
