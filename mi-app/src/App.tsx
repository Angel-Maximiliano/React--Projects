import React from 'react';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import NavBar from './components/models/NavBar';
import Presentation from './components/models/Presentation';
import ImageSlider from './components/models/ImageSlider';

import './App.css';
import './components/styles/style.css'

const App = () => {

  return (
    <>
      <NavBar />
      <Presentation />
      <ImageSlider />
    </>
  );
};



export default App;
