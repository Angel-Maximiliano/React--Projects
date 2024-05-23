import React from 'react';
import { Box, Card, CardMedia, useMediaQuery, useTheme } from '@mui/material';

import OneShot from '../images/descarga.jpg';
import Nier from '../images/Nier.jpg';
import Halo from '../images/Halo.jpg';

const ImageSlider= () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      flexDirection={isMobile ? 'column' : 'row'}
    >
      {!isMobile && (
        <Card
          sx={{
            width: '25%',
            height: '200px',
            marginRight: 50,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={OneShot}
            alt="Left Image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Card>
      )}

<Card
  sx={{
    width: isMobile ? '80%' : '50%',
    height: '400px',
    boxShadow: 3,
    position: 'absolute',
  }}
>
  {/* Agrega el degradado */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '80%',
      height: '100%',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 1))',
    }}
  ></div>
  
  {/* Logo del juego*/}
  <div
    style={{
      position: 'absolute',
      top: 10,
      left: 10,
    }}
  >
    <img
      src='ruta-al-logo-del-juego.png'
      alt='Logo del juego'
      style={{
        width: 50,
        height: 'auto',
      }}
    />
  </div>
  
  {/* Descripción del juego */}
  <div
    style={{
      position: 'absolute',
      bottom: 10,
      left: 10, 
      color: 'white',
    }}
  >
    Descripción del juego
  </div>
  
  {/* La imagen de fondo */}
  <CardMedia
    component="img"
    image={Nier}
    alt="Central Image"
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    }}
  />
</Card>

      {!isMobile && (
        <Card
          sx={{
            width: '25%',
            height: '200px',
            marginLeft: 2,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={Halo}
            alt="Right Image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Card>
      )}

      {isMobile && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
          marginTop={2}
        >
          <Card
            sx={{
              width: '80%',
              height: '200px',
              marginBottom: 2,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={OneShot}
              alt="Left Image"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Card>

          <Card
            sx={{
              width: '80%',
              height: '200px',
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={Halo}
              alt="Right Image"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
