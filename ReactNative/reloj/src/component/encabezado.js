import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Encabezado extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Icon name="bars" style={styles.textStyle} size={20}/>
        <Text style={styles.textStyle}>{this.props.tituloEncabezado}</Text>
        <Icon name="plus" style={styles.textStyle} size={20}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
      paddingTop: 0,
      backgroundColor: '#666',
      height: 50,
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
