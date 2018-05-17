import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './component/Home';
import ListaCiudades from './component/ListaCiudades';
import Perfil from './component/Perfil';

const RouterComponent = () => {
  return (
      <Router>
        <Stack hideNabBar>
          <Stack key= "inicio">
            <Scene
                key= "Home"
                component={ Home }
                title= "Inicio"
                initial
            />
          </Stack>
          <Stack key= "configuraciones">
            <Scene
                key= "ListaCiudades"
                component={ ListaCiudades }
                title= "Ciudades"
            />
            <Scene
                key= "Perfil"
                component={ Perfil }
                title= "Perfil"
            />
          </Stack>
        </Stack>
      </Router>
  );
};

export default RouterComponent;
