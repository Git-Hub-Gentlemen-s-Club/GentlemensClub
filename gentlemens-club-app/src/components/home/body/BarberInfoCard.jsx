import React, { useState } from 'react';
import {
  CardContainer,
  CardContent,
  CardLeft,
  BarberImage,
  FavoriteButton,
  RatingBadge,
  RatingValue,
  RatingLabel,
  CardMiddle,
  Title,
  Address,
  RecommendationContainer,
  Recommendation,
  ExclamationContainer,
  ReservationRow,
  ReservationButton,
  ServiceName,
  ServicePrice,
  ServiceDuration,
  SeeMoreButton,
  ButtonContainer,
  ServiceSubtitle,
  ReservationDetails,
  FavoriteIcon,
  Separator,
  BarberPoleImage,
  ServiceDetails,
  ServiceContainer,
  ContainerReservationButton
} from '../../../styled_components/home/body_style/BarberInfoCardStyle';
import { faHeart, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import barberPole from '../../../assets/img/barber_pole.png';

const BarberInfoCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const services = [
    {
      name: 'Corte de Cabelo',
      subtitle: 'Corte de cabelo completo, lavagem e finalização com produto.',
      price: '50.00',
      duration: '45 min'
    },
    {
      name: 'Corte de cabelo e Barbear',
      subtitle: 'Corte de cabelo completo e alinhamento da barba.',
      price: '70.00',
      duration: '60 min'
    },
    {
      name: 'Barbear',
      subtitle: 'Alinhamento da barba realizado de forma tradicional na navalha.',
      price: '30.00',
      duration: '30 min'
    }
  ];

  return (
    <CardContainer>
      <CardContent>
        <CardLeft>
          <BarberImage src="src/assets/barbeariaTeste.png" alt="Barbearia" />
          <RatingBadge>
            <RatingValue>5.0</RatingValue>
            <RatingLabel>304 Avaliações</RatingLabel>
          </RatingBadge>
        </CardLeft>
        <CardMiddle>
          <Title>Barbearia King</Title>
          <Address>773 m • Avenida XV de Novembro, 408, 06850-100, Itapecerica da Serra</Address>
          <RecommendationContainer>
            <Recommendation>RECOMENDADO PELO GENTLEMEN'S CLUB</Recommendation>
            <ExclamationContainer>
              <FontAwesomeIcon icon={faExclamationCircle} />
            </ExclamationContainer>
          </RecommendationContainer>

          {services.map((service, index) => (
            <div key={index}>
              <ReservationRow>
                <ReservationDetails>
                  <ServiceName>{service.name}</ServiceName>
                  <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                </ReservationDetails>
                <ServiceContainer>
                  <ServiceDetails>
                    <ServicePrice>R${service.price}</ServicePrice>
                    <ServiceDuration>{service.duration}</ServiceDuration>
                  </ServiceDetails>
                  <ContainerReservationButton>
                    <ReservationButton>Reservar</ReservationButton>
                    <BarberPoleImage src={barberPole} alt="Barber Pole" />
                  </ContainerReservationButton>
                </ServiceContainer>
              </ReservationRow>
              <Separator />
            </div>
          ))}
        </CardMiddle>
      </CardContent>
      <ButtonContainer>
        <FavoriteButton onClick={handleFavoriteClick}>
          <FavoriteIcon 
            icon={faHeart} 
            color={isFavorited ? 'red' : 'white'} 
          /> Favoritar
        </FavoriteButton>
        <SeeMoreButton>Ver mais</SeeMoreButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default BarberInfoCard;
