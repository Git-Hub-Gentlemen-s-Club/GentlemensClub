import React from 'react';
import { StyledBarberCard, BarberName, BarberAddress, BarberRating } from '../styled_components/CarouselStyle';
import { FaExclamationCircle } from 'react-icons/fa'; // Importando o ícone de exclamação

const BarberCard = ({ image, name, address, rating, reviews }) => {
  return (
    <StyledBarberCard>
      <img src={image} alt={name} />
      <div className="rating-badge">
        <div className="rating-number">{rating}</div>
        <div>{reviews} avaliações</div>
      </div>
      <BarberName>{name}</BarberName>
      <BarberAddress>{address}</BarberAddress>
      <div className="highlight-section">
        <span className="highlight-text">Destaque</span>
        <FaExclamationCircle className="highlight-icon" />
      </div>
    </StyledBarberCard>
  );
};

export default BarberCard;
