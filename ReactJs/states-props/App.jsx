import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = { mensaje: 'Bienbenido a tu peor pesadilla con React Js'}
  }

  render() {
    return {
      <div>
        <h1>{ this.state.mensaje } </h1>
      </div>
    }
  }
}

export default App;
