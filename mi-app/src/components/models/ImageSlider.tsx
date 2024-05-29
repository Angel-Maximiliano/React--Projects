import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import OneShot from '../images/OneShot-Slider.jpg'
import Nier from '../images/Nier-Slider.jpg'
import Halo from '../images/Halo-Slider.jpg'
import OneShot_Title from '../images/OneShot-Title.png'
import Halo_Title from '../images/Halo-Title.png'
import Nier_Title from '../images/Nier-Title.png'

const SliderWrapper = styled.div`
  .slick-slide {
    perspective: 1000px;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide div {
    transform-style: preserve-3d;
  }

  .slider-image {
    position: relative;
    margin: 0 0 0 200px;
    width: 70%;
    height: 500px; /* Puedes ajustar la altura según tu necesidad */
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .slider-image {
      height: 300px;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 200px;
  height: 92%;
  width: 50%;
  background: linear-gradient(to right, black, transparent);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 40px auto 0 20px;
`;

const Description = styled.div`
  margin: 0 auto 100px 20px;
  text-align: center;
  width: 50%;
`;

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [
    {
      src: OneShot,
      logo: OneShot_Title,
      description: "OneShot - Nuevo lanzamiento: Acompaña a Niko en una aventura única.",
    },
    {
      src: Nier, // Reemplaza con la ruta a la imagen de Nier Automata
      logo: Nier_Title, // Reemplaza con la ruta al logo de Nier Automata
      description: "Nier Automata - Descuento: ¡50% de descuento en este aclamado RPG!",
    },
    {
      src: Halo, // Reemplaza con la ruta a la imagen de Halo Infinite
      logo: Halo_Title, // Reemplaza con la ruta al logo de Halo Infinite
      description: "Halo Infinite - Actualización: Nuevos mapas y armas disponibles.",
    },
  ];

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`Slide ${index}`} className="slider-image" />
            <Overlay>
              <Logo src={image.logo} alt="Game Logo" />
              <Description>{image.description}</Description>
            </Overlay>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ImageSlider;
