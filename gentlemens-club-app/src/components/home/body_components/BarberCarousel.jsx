// src/components/BarberCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import BarberCard from './BarberCarouselCard';
import { CarouselContainer } from '../../../styled_components/home/body_style/CarouselStyle';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importando os ícones
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BarberCarousel = () => {
  const barbers = [
    {
      image: '/src/assets/barbearia_9_de_julho.webp',
      name: 'Barbearia 1º De Outubro',
      address: 'Avenida XV de Novembro, 3715, 06850-100, Itapecerica da Serra',
      rating: '5.0',
      reviews: '379'
    },
    {
      image: '/src/assets/barbearia_9_de_julho.webp',
      name: 'Sr Costa Barbershop',
      address: 'Rua Major Telles, 167, 1 Andar - Sala 3, 06850-001, Itapecerica da Serra',
      rating: '5.0',
      reviews: '457'
    },
    {
      image: '/src/assets/barbearia_9_de_julho.webp',
      name: 'Barbearia 1º De Outubro',
      address: 'Avenida XV de Novembro, 3715, 06850-100, Itapecerica da Serra',
      rating: '5.0',
      reviews: '379'
    },
    {
      image: '/src/assets/barbearia_9_de_julho.webp',
      name: 'Barbearia 1º De Outubro',
      address: 'Avenida XV de Novembro, 3715, 06850-100, Itapecerica da Serra',
      rating: '5.0',
      reviews: '379'
    },
    {
      image: '/src/assets/barbearia_9_de_julho.webp',
      name: 'Barbearia 1º De Outubro',
      address: 'Avenida XV de Novembro, 3715, 06850-100, Itapecerica da Serra',
      rating: '5.0',
      reviews: '379'
    },
    // Adicione mais barbearias conforme necessário
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <FaChevronLeft />, // Adiciona o ícone de seta para a esquerda
    nextArrow: <FaChevronRight />, // Adiciona o ícone de seta para a direita
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {barbers.map((barber, index) => (
          <BarberCard key={index} {...barber} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default BarberCarousel;
