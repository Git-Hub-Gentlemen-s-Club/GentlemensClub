// BarberInfoCardStyle.jsx

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  padding: 35px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 75%;
  box-sizing: border-box;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 73%, 90% 100%, 0 100%);

  @media (max-width: 768px) {
    padding: 10px;
    clip-path: none;
    max-width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const CardLeft = styled.div`
  position: relative;
  width: 300px; /* Ajuste conforme necessário */
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BarberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px 0 20px 0;
  display: block;
  user-select: none;
  pointer-events: none;
`;

export const RatingBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #B58934;
  padding: 8px 12px;
  border-radius: 0 0 0 10px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
`;

export const RatingValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const RatingLabel = styled.div`
  font-size: 0.8rem;
  margin-top: 2px;
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

export const Title = styled.h1`
  font-family: 'Rye', sans-serif;
  font-size: 1.5em;
  margin: 0 0 5px 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const Address = styled.div`
  margin: 0 0 5px 0;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const RecommendationContainer = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente no centro */
  gap: 10px; /* Espaçamento entre os itens */
`;

export const Recommendation = styled.div`
  background-color: #ddb400;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  max-width: 270px;
  flex-shrink: 0; /* Impede que o Recommendation encolha */
`;

export const ExclamationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  /* Remova margin-bottom se não for necessário */
`;


export const ReservationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ReservationDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ReservationButton = styled.button`
  background-color: #ddb400;
  color: #000;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c5a400;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    order: 1; /* Garante que o botão vem após o preço na versão mobile */
  }
`;

export const BarberPoleImage = styled.img`
  margin-left: -0.3rem;
  height: 28px;
  user-select: none;
  pointer-events: none;
  position: relative;
  top: 2px; 

  @media (max-width: 768px) {
    order: 5;
    align-self: flex-end;
    margin-bottom: 0.2rem;
  }
`;

export const ServiceName = styled.span`
  font-size: 1.2em;
  display: block;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const ServiceSubtitle = styled.div`
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const Separator = styled.div`
  height: 2px;
  background-color: #ddb400;
  margin: 10px 0;
  width: 100%;
`;

export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 140px;
  }
`;

export const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* Espaçamento adicional para separar do botão de reserva */

  @media (max-width: 768px) {
    margin-left: 0; /* Remove a margem para dispositivos móveis */
    margin-top: 10px;
    margin-right: 0; /* Remove o espaçamento adicional em dispositivos móveis */
  }
`;

export const ServicePrice = styled.span`
  font-size: 1.2em;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    order: 3; /* Garante que o preço vem antes do botão na versão mobile */
  }
`;

export const ServiceDuration = styled.span`
  font-size: 1em;
  color: #666;
  display: block;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 5px;
    order: 4;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerReservationButton = styled.div`
  display: flex;
`;

export const FavoriteButton = styled.button`
  background-color: #ddb400;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: auto;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #c5a400;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
    justify-content: center;
  }
`;

export const FavoriteIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const SeeMoreButton = styled.button`
  background-color: #ddb400;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-left: 20.0rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #c5a400;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }
`;

export const SeeMoreIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;
