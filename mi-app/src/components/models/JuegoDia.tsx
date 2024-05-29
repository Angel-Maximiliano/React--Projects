import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  useMediaQuery
} from '@mui/material';

import '../styles/style.css';

const JuegoDia = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    require(`../images/Celeste-01.jpg`),
    require(`../images/Celeste-02.jpg`),
    require(`../images/Celeste-03.jpg`)
  ];

  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery('(max-width:880px)');

  const changeImage = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentImage(index);
      setIsVisible(true);
    }, 500); // Tiempo de espera igual al tiempo de la transición en CSS
  };

  return (
    <>
      <Typography variant="h4" component="h1" align="left" color="white"  sx={{ marginTop: '2rem', marginLeft:'10rem', fontFamily: 'Krona One, sans-serif' }}>
        Juego del día
      </Typography>
      <Box sx={{
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        borderRadius: '25px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        marginTop: { xs: '2rem', md: '2rem' }
      }}>
        <Card sx={{
          width: '100%',
          maxWidth: { xs: '90%', md: '80%' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          background: '#120101',
          color: 'white',
          borderRadius: '25px'
        }}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: { xs: '1rem', md: '0' } }}>
              <CardMedia
                component="img"
                image={isMobile ? require(`../images/Celeste-Portada02.jpg`) : require(`../images/Celeste-Portada.jpg`)}
                alt="game cover" 
                sx={{
                  borderRadius: '25px',
                  width: { xs: '100%', md: '90%' },
                  height: { xs: 'auto', md: 'auto' },
                  maxHeight: { xs: '300px', md: 'none' }, // Ajusta la altura máxima para móvil
                  objectFit: 'cover' // Mantiene la proporción de la imagen
                }}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <CardMedia
                  component="img"
                  image={require(`../images/Celeste-Title.png`)}
                  alt="game logo"
                  sx={{ width: '100%', marginBottom: '1rem' }}
                />
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="white" sx={{fontFamily: 'Krona One, sans-serif'}}>
                  Ayuda a Madeline a superar sus demonios internos en su travesía en la montaña Celeste, sobrevive a varios desafíos y logra llegar a la cima
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  image={images[currentImage]}
                  alt="game image"
                  className={isVisible ? 'fade-in-out' : 'fade-in-out hidden'}
                  sx={{ width: { xs: '100%', md: '350px' }, height: { xs: 'auto', md: '200px' }, marginBottom: '1rem' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: { xs: '100%', md: '100%' }, alignItems: 'center' }}>
                  {images.map((image, index) => (
                    <IconButton key={index} onClick={() => changeImage(index)}>
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`game image ${index}`}
                        sx={{ width: { xs: '50px', md: '80px' }, height: { xs: '25px', md: '40px' }, borderRadius: '5%', cursor: 'pointer' }}
                      />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default JuegoDia;
