import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Cards from './src/components/cards';
import CardSection from './src/components/cardSection';

export default class App extends Component {
  render () {
    return (
       <View>
          <Cards>
            <CardSection>
              <Text>Probando un componente Card</Text>
            </CardSection>

            <CardSection>
              <Text>Esta es otra sección</Text>
            </CardSection>

            <CardSection>
              <Text>y esta otra más!</Text>
            </CardSection>

            <CardSection>
              <Button
                onPress= { () => console.log('botón presionado')}
                title="Aceptar"
                color="#ff9503"
                />
            </CardSection>
          </Cards>
       </View>
     );
  }
};
