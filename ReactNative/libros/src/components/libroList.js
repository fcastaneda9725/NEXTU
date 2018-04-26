import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import request from 'superagent';
import Libro from './libro';

export default class LibroList extends Component {
  state ={ libros: [] };

  componentWillMount () {
    request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({
        q: 'stranger+inautor:williams',
        key: 'AIzaSyCp4i6E9UdsmgcwO9I73bOvM28T3vWL0dQ	',
      })
      .end((err, res) => {
        this.setState({ libros: res.body.items });
      });
  };

  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.mostrarLibros()}
      </ScrollView>
    );
  }

  mostrarLibros () {
    return this.state.libros.map(
      (libro) => <Libro key={libro.id} libroData={libro} />
    );
  };
};
