import styled from 'styled-components';

export const FiltersButtonContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: none;
  background-color: #FFA500; /* Laranja */
  color: white;
  border-radius: 4px;
  cursor: pointer;
  position: relative; /* Necessário para o posicionamento do conteúdo do accordion */
  margin-right: 10px; /* Espaçamento entre os botões */
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
  width: 250px; /* Ajusta a largura do conteúdo do accordion */
  z-index: 1;
`;

export const FilterOptions = styled.div`
  margin-top: 10px;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adicionado para alinhar os elementos */
  margin-bottom: 10px;

  svg {
    margin-right: 12px; /* Espaçamento entre o ícone e o texto */
    width: 20px; /* Tamanho do ícone */
    height: 20px; /* Tamanho do ícone */
    color: #FFA500; /* Cor do ícone */
  }

  label {
    flex-grow: 1; /* Adicionado para ocupar o espaço disponível */
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #FFA500; /* Cor de destaque */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: #FFF;
    background-color: #FFA500; /* Laranja */
  }

  button:first-child {
    background-color: transparent; /* Fundo transparente */
    color: #FFA500; /* Texto laranja */
    border: 1px solid #FFA500; /* Contorno laranja */
    opacity: 0.5; /* Transparente inicialmente */
  }

  button:first-child.active {
    background-color: #FFF; /* Fundo branco */
    opacity: 1; /* Opacidade total quando ativo */
  }

  button:hover {
    opacity: 0.8;
  }
`;
