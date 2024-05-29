// JuegosDestacados.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Niko from '../images/Niko.jpg';
import Celeste from '../images/Celeste-Portada.jpg';
import OneShot from '../images/OneShot-Portada.jpg'
import Halo from '../images/Halo-Portada.jpg';
import Nier from '../images/Nier-Portada.jpg';
import Hades from '../images/Hades-Portada.jpg';
import Witcher from '../images/Witcher-Portada.jpg';
import Stardew from '../images/Stardew-Portada.jpg';
import Punketos from '../images/Punketos-Portada.jpg';
import Doom from '../images/Doom-Portada.jpg';
import Control from '../images/Control-Portada.jpg';
const JuegosDestacados = () => {
  const juegos = [
    { nombre: 'Celeste', imagen: Celeste, valoracion: '9/10', precio: '$19.99' },
    { nombre: 'OneShot', imagen: OneShot, valoracion: '8.5/10', precio: '$9.99' },
    { nombre: 'Halo Infinite', imagen: Halo, valoracion: '9.5/10', precio: '$59.99' },
    { nombre: 'Nier Automata', imagen: Nier, valoracion: '9/10', precio: '$39.99' },
    { nombre: 'Hades', imagen: Hades, valoracion: '10/10', precio: '$24.99' },
    { nombre: 'The Witcher 3', imagen: Witcher, valoracion: '10/10', precio: '$29.99' },
    { nombre: 'Stardew Valley', imagen: Stardew, valoracion: '9.5/10', precio: '$14.99' },
    { nombre: 'Cyberpunk 2077', imagen: Punketos, valoracion: '8/10', precio: '$49.99' },
    { nombre: 'Doom Eternal', imagen: Doom, valoracion: '9.5/10', precio: '$19.99' },
    { nombre: 'Control', imagen: Control, valoracion: '9/10', precio: '$29.99' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container>
      <Titulo>Juegos Destacados</Titulo>
      <Slider {...settings}>
        {juegos.map((juego, index) => (
          <Carta key={index}>
            <ImagenContainer>
              <Imagen src={juego.imagen} alt={juego.nombre} />
            </ImagenContainer>
            <NombreJuego>{juego.nombre}</NombreJuego>
            <Info>
              <Valoracion>{juego.valoracion}</Valoracion>
              <Precio>{juego.precio}</Precio>
            </Info>
          </Carta>
        ))}
      </Slider>
    </Container>
  );
};

export default JuegosDestacados;

// Estilos con styled-components
const Container = styled.div`
  font-family: 'Krona One', sans-serif;
  padding: 100px;
`;

const Titulo = styled.h2`
  text-align: left;
  color: white;
  margin-bottom: 20px;
`;

const Carta = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #120101;
  color: white;
  width: 0px;
  margin: 10px;
`;

const ImagenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px; /* Añade un margen de 50px en la parte inferior de la imagen */
`;

const Imagen = styled.img`
  width: 150px; /* Ajusta el ancho de la imagen */
  height: 200px; /* Ajusta la altura de la imagen */
  object-fit: cover;
`;

const NombreJuego = styled.h3`
  margin: 10px 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;

const Valoracion = styled.span``;

const Precio = styled.span``;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Lineas = styled.span`
  margin: 0 10px;
`;

const Boton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'Krona One', sans-serif;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
