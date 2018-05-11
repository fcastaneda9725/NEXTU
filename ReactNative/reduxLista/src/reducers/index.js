import { combineReducers } from 'redux';
import frutasReducer from './datosReducer';

export default combineReducers({
  frutas: frutasReducer,
});
