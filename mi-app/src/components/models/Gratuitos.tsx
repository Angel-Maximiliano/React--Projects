// JuegosDestacados.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Celeste from '../images/Niko.jpg';

import Fortinaiti from '../images/Fortinaiti-Portada.jpg';
import Apex from '../images/Apex-Portada.jpg';
import Genshin from '../images/Genshin-Portada.jpg';
import Warframe from '../images/Warframe-Portada.jpg';
import LOL from '../images/LOL-Portada.jpg';
import Warzone from '../images/Warzone-Portada.jpg';
import Valorant from '../images/Valorant-Portada.jpg';
import CarrosFlipantes from '../images/CarrosFlipantes-Portada.jpg';
import Destiny from '../images/Destiny-Portada.jpg'
import Dota from '../images/Dota-Portada.jpg'

const JuegosDestacados = () => {
  const juegos = [
    { nombre: 'Fortnite', imagen: Fortinaiti, valoracion: '8/10', precio: 'Free' },
    { nombre: 'Apex Legends', imagen: Apex, valoracion: '8.5/10', precio: 'Free' },
    { nombre: 'Genshin Impact', imagen: Genshin, valoracion: '9/10', precio: 'Free' },
    { nombre: 'Warframe', imagen: Warframe, valoracion: '8.5/10', precio: 'Free' },
    { nombre: 'League of Legends', imagen: LOL, valoracion: '8.5/10', precio: 'Free' },
    { nombre: 'Call of Duty: Warzone', imagen: Warzone, valoracion: '8.5/10', precio: 'Free' },
    { nombre: 'Valorant', imagen: Valorant, valoracion: '8.5/10', precio: 'Free' },
    { nombre: 'Rocket League', imagen: CarrosFlipantes, valoracion: '9/10', precio: 'Free' },
    { nombre: 'Destiny 2', imagen: Destiny, valoracion: '8/10', precio: 'Free' },
    { nombre: 'Dota 2', imagen: Dota, valoracion: '8/10', precio: 'Free' },
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
      <Titulo>Juegos Gratuitos</Titulo>
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
  padding: 100px 100px 0 100px
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
