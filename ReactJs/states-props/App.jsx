import React from 'react';
import componente2 from './componente2.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = { mensaje: 'Bienvenido a tu peor pesadilla con React Js', mensaje2: 'Segundo mensaje con Props'  }
  }

  render() {
    return(
      <div>
        <h1>{ this.state.mensaje } </h1>
        <componente2 propiedad={this.state.mensaje2}/>
        <div>
          <button onClick= {this.changeState.bind(this)}> Cambiar mensaje </button>
        </div>
      </div>
    )
  }

  changeState() {
    this.setState( { mensaje: 'Nuevo mensaje desde el infierno'})
  }
}

export default App;
