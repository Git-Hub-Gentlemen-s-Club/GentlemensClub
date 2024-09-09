import React, { useState } from 'react';
import {
  CardContainer,
  CardContent,
  CardLeft,
  BarberImage,
  FavoriteButton,
  RatingBadge,
  CardMiddle,
  Title,
  Address,
  Recommendation,
  ExclamationContainer,
  ReservationRow,
  ReservationButton,
  ServiceName,
  ServicePrice,
  SeeMoreButton,
  ButtonContainer,
  ServiceSubtitle,
  ReservationDetails,
  FavoriteIcon,
  Separator, // Importa o componente Separator
} from '../styled_components/body_style/BarberInfoCardStyle';
import { faHeart, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BarberInfoCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const services = [
    {
      name: 'Corte de Cabelo',
      subtitle: 'Corte de cabelo completo, lavagem e finalização com produto.',
      price: '50.00'
    },
    {
      name: 'Corte de cabelo e Barbear',
      subtitle: 'Corte de cabelo completo e alinhamento da barba.',
      price: '70.00'
    },
    {
      name: 'Barbear',
      subtitle: 'Alinhamento da barba realizado de forma tradicional na navalha.',
      price: '30.00'
    }
  ];

  return (
    <CardContainer>
      <CardContent>
        <CardLeft>
          <BarberImage src="src/assets/barbeariaTeste.png" alt="Barber" />
          <RatingBadge>5.0</RatingBadge>
        </CardLeft>
        <CardMiddle>
          <Title>Barbearia King</Title>
          <Address>773 m • Avenida XV de Novembro, 408, 06850-100, Itapecerica da Serra</Address>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Recommendation>RECOMENDADO PELO GENTLEMEN'S CLUB</Recommendation>
            <ExclamationContainer>
              <FontAwesomeIcon icon={faExclamationCircle} />
            </ExclamationContainer>
          </div>
          {services.map((service, index) => (
            <div key={index}>
              <ReservationRow>
                <ReservationDetails>
                  <ServiceName>{service.name}</ServiceName>
                  <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                </ReservationDetails>
                <ReservationButton>Reservar</ReservationButton>
                <ServicePrice>R${service.price}</ServicePrice>
              </ReservationRow>
              <Separator /> {/* Adiciona o divisor aqui */}
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
