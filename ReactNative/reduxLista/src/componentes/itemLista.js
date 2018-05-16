import React, { Component } from 'react';
import { Text,
         StyleSheet,
         TouchableWithoutFeedback,
         View,
         LayoutAnimation,
         UIManager,
         Platform,
       } from 'react-native';
import { CardSection } from './lib';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ItemLista extends Component {

  componentWillUpdate () {
    LayoutAnimation.spring();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true);
      LayoutAnimation.spring();
    }
  }

  mostrarDescripcion () {
    const { expandir, frutaInfo } = this.props;
    if (expandir) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            { frutaInfo.descripcion }
          </Text>
        </CardSection>
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
