import React, { useState } from 'react';
import { StyledBarberCard, BarberAddress, BarberRating } from '../../../styles/home/body_style/CarouselStyle';
import { FaExclamationCircle, FaHeart } from 'react-icons/fa'; // Importando o ícone de coração
import { useNavigate } from 'react-router-dom';

const BarberCard = ({ image, name, address, rating, reviews }) => {
  const [favorited, setFavorited] = useState(false); // Estado para controlar se o card está favoritado
  const navigate = useNavigate()
  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Impede que o clique no ícone afete outros elementos
    setFavorited(!favorited); // Alterna o estado de favoritado
  };

  return (
    <>
    
      <StyledBarberCard favorited={favorited}>
        <img src={image} alt={name} />
        <div className="rating-badge">
          <div className="rating-number">{rating}</div>
          <div>{reviews} avaliações</div>
        </div>
      
        <div className="name-container">
          <div className="name" onClick={() => (navigate("/BarbeariaSelecionada"))}> {name} </div>
          <FaHeart className="favorite-icon" onClick={handleFavoriteClick} />
        </div>
        <BarberAddress>{address}</BarberAddress>
        <div className="highlight-section">
          <span className="highlight-text">Destaque</span>
          <FaExclamationCircle className="highlight-icon" />
        </div>
        
      </StyledBarberCard>
      
    </>
    
    
    
  );
};

export default BarberCard;
