import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class ListaFrutas extends Component {
  render() {
    console.log(this.props);
    return (
      <Text>
        ListaFrutas
      </Text>
    );
  }
}

const mapStateToProps = state => {
  return { frutas: state.frutas };
};

export default connect(mapStateToProps)(ListaFrutas);
