import React, { Component } from 'React';
import firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Card, CardSection, Boton, Input, Spinner } from './lib';

export default class Formulario extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    cargando: false,
  };

  enviarFormulario() {
    const { email, password } = this.state;
    this.setState({ error: '', cargando: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginExitoso.bind(this))
        .catch(this.loginError.bind(this))
        ;
  }

  loginExitoso() {
    this.setState({ email: '', password: '', cargando: false });
  }

  loginError() {
    this.setState({ error: 'Error de Autentificación', cargando: false });
  }

  mostrarAccion() {
    if (this.state.cargando) {
      return <Spinner size= { 'small' } />;
    }

    return (
      <Boton
        texto={ 'Iniciar Sesión' }
        onPress= { this.enviarFormulario.bind(this) }
      />
    );
  }

  render() {
    return (
      <Card style= { styles.cardStyles }>

        <CardSection>
          <Input
            texto= { 'Email' }
            value= { this.state.email }
            onChangeText= { email => this.setState({ email })}
            placeholder= { 'usuario@gmail.com' }
          />
        </CardSection>
        <CardSection>
        <Input
          texto= { 'Contraseña' }
          value= { this.state.password }
          onChangeText= { password => this.setState({ password })}
          placeholder= { 'Contraseña' }
          secureTextEntry
        />
        </CardSection>
        <Text style= { styles.errorStyles }>{ this.state.error } </Text>
        <CardSection>
          { this.mostrarAccion() }
        </CardSection>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardStyles: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  errorStyles: {
    fontSize: 19,
    color: 'red',
    alignSelf: 'center',
  },
});
