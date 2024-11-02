// src/styled_components/LocationHeaderStyle.jsx
import styled, { keyframes } from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importando o ícone de localização

// Animação de pulso
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const LocationHeaderContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 75%; /* Limite a largura máxima */
  padding: 0 10px; /* Adiciona padding lateral */
  text-align: left; /* Alinha o texto à esquerda */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LocationTitle = styled.h1`
  font-family: 'Rye', sans-serif;
  font-size: 1.8rem;
  color: #B58934; /* Cor do texto */
  margin: 0;
  padding: 10px 0; /* Adiciona padding apenas no topo e fundo */
  display: flex;
  align-items: center; /* Alinha o ícone e o texto verticalmente */
  gap: 10px; /* Espaço entre o texto e o ícone */
  flex-wrap: wrap; /* Permite que o texto e o ícone se movam para a linha abaixo, se necessário */

  @media (max-width: 768px) {
    font-size: 1.4rem; /* Tamanho menor do texto em telas menores */
    flex-direction: row; /* Garante que o ícone fique ao lado do texto em dispositivos móveis */
    justify-content: flex-start; /* Alinha o conteúdo ao início do container */
  }
`;

export const LocationIcon = styled(FaMapMarkerAlt)`
  font-size: 2rem; /* Tamanho maior do ícone */
  color: #FF0000; /* Cor vermelha do ícone */
  animation: ${pulse} 1.5s infinite; /* Animação de pulso */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Tamanho menor do ícone em telas menores */
  }
`;
