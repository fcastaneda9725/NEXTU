import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardSection extends Component {
  render () {
    return (
      <View style={styles.viewStyle}>
        {this.props.children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    position: 'relative',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
