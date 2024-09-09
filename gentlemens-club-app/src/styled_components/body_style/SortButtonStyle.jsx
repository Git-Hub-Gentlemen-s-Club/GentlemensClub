// src/styled_components/SortButtonStyle.jsx
import styled from 'styled-components';

export const SortButtonContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: none;
  background-color: #FFA500; /* Laranja */
  color: white;
  border-radius: 4px;
  cursor: pointer;
  position: relative; /* Necessário para o posicionamento do conteúdo do accordion */
  margin-left: 10px; /* Espaçamento entre os botões */
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;

export const AccordionContainer = styled.div`
  position: relative;
`;

export const AccordionContent = styled.div`
  background-color: #FFF; /* Fundo branco para o conteúdo do accordion */
  color: #000; /* Texto preto */
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100%; /* Alinha abaixo do botão */
  left: 0;
  width: 300px; /* Aumenta a largura do conteúdo do accordion */
  z-index: 1;
`;

export const SortOptions = styled.div`
  margin-top: 10px;
`;

export const SortOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    flex-grow: 1; /* Faz o label ocupar o espaço disponível */
    margin-left: 8px; /* Espaçamento entre o ícone e o texto */
    text-align: left; /* Alinha o texto à esquerda */
  }

  input[type="radio"] {
    margin-left: auto; /* Alinha os botões de seleção à direita */
    margin-right: 12px; /* Espaçamento ajustado */
    width: 20px;
    height: 20px;
    accent-color: #FFA500; /* Cor laranja para as bolinhas de seleção */
  }

  .icon {
    color: #FFA500; /* Cor laranja para os ícones */
    font-size: 24px; /* Aumenta o tamanho dos ícones */
  }
`;
