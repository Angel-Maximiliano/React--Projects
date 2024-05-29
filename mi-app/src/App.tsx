import React from 'react';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from './components/models/NavBar';
import Presentation from './components/models/Presentation';
import ImageSlider from './components/models/ImageSlider';
import JuegoDia from './components/models/JuegoDia';
import Destacado from './components/models/Destacados';
import Gratuito from './components/models/Gratuitos';
import Noticias from './components/models/Noticias';

import './App.css';
import './components/styles/style.css'

const App = () => {

  return (
    <>
      <NavBar />
      <Presentation />
      <ImageSlider />
      <JuegoDia/>
      <Destacado/>
      <Gratuito/>
      <Noticias/>
    </>
  );
};



export default App;
