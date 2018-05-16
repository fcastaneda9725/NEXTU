import { combineReducers } from 'redux';
import frutasReducer from './datosReducer';
import seleccionadaReducer from './seleccionadaReducer';

export default combineReducers({
  frutas: frutasReducer,
  idFrutaSeleccionada: seleccionadaReducer,
});
