import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const noticias = [
  {
    titulo: 'Grand Theft Auto VI - Fecha de Lanzamiento',
    imagen: require('../images/GTA6-Portada.jpg'),
    desarrollador: 'Rockstar Games',
    fechaCompleta: '5 de Diciembre de 2023'
  },
  {
    titulo: 'Minecraft - Nueva actualización',
    imagen: require('../images/Minecraft-Portada.jpg'),
    desarrollador: 'Microsoft',
    fechaCorta: '1/10/2023'
  },
  {
    titulo: 'Dark Souls Remastered - Descuento de fin de año',
    imagen: require('../images/DarkSouls-Portada.jpg'),
    desarrollador: 'FromSoftware',
    fechaCorta: '30/11/2023'
  }
];

const Noticias = () => {
  return (
    <Box sx={{ width: '70%', margin: 'auto', mt: 4, marginTop: '10rem' }}>
      <Typography variant="h4" sx={{ color: 'white', textAlign: 'left', fontFamily: 'Krona One, sans-serif', marginBottom: '20px'}}>
        Últimas Noticias
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Card sx={{ width: { xs: '100%', md: '80%' }, backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
          <Box sx={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
            <img 
              src={noticias[0].imagen} 
              alt={noticias[0].titulo} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          <CardContent sx={{ padding: '8px' }}>
            <Typography variant="h6" sx={{ marginBottom: '4px', fontFamily: 'Krona One, sans-serif', color: 'white' }}>
              {noticias[0].titulo}
            </Typography>
            <Typography sx={{ fontSize: '0.6rem', color: 'white' }}>{noticias[0].desarrollador}</Typography>
            <Typography sx={{ fontSize: '0.6rem', color: 'white' }}>{noticias[0].fechaCompleta}</Typography>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: { xs: '100%', md: '35%' } }}>
          {noticias.slice(1).map((noticia, index) => (
            <Card key={index} sx={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <Box sx={{ width: '100%', height: '100px', overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <CardContent sx={{ padding: '6px', textAlign: 'left' }}>
                <Typography variant="h6" sx={{ marginBottom: '4px', fontFamily: 'Krona One, sans-serif', fontSize: '0.8rem', color: 'white' }}>
                  {noticia.titulo}
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', color: 'white' }}>{noticia.desarrollador}</Typography>
                <Typography sx={{ fontSize: '0.65rem', color: 'white' }}>{noticia.fechaCorta}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Noticias;
