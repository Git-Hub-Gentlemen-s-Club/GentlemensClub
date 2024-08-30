import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone desejado

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 250px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BarberImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  user-select: none; /* Impede a seleção */
  pointer-events: none; /* Impede o arrasto */
`;

export const RatingBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ddb400;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  user-select: none; /* Impede a seleção */
  pointer-events: none; /* Impede o arrasto */
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

export const Title = styled.h1`
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

export const Recommendation = styled.div`
  background-color: #ddb400;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
  max-width: 250px;
`;

export const ExclamationContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 23px;
  margin-bottom: 7px;
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
    order: 4; /* Adiciona a ordem para o botão */
  }
`;

export const ServiceName = styled.span`
  font-size: 1.2em;
  display: block;

  @media (max-width: 768px) {
    order: 1; /* Adiciona a ordem para o título */
  }
`;

export const ServiceSubtitle = styled.div`
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;

  @media (max-width: 768px) {
    order: 2; /* Adiciona a ordem para o subtítulo */
  }
`;

export const Separator = styled.div`
  height: 2px;
  background-color: #ddb400;
  margin: 10px 0;
  width: 100%;
`;

export const ServicePrice = styled.span`
  font-size: 1.2em;
  margin-left: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    order: 3; /* Adiciona a ordem para o preço */
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

export const FavoriteButton = styled.button`
  background-color: #ddb400;
  color: #fff;
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
  background-color: #ddb400; /* Cor laranja */
  color: #fff; /* Texto branco */
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-left: 40px;
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
