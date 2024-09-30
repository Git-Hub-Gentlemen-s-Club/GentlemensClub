import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #19181B;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 479px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    padding: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 20px;
  }

  @media (min-width: 1280px) {
    padding: 25px;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #2E2C30;
  width: 100px;
  padding: 15px;
  border-bottom-right-radius: 20px;

  img {
    width: 60px;
  }

  @media (max-width: 479px) {
    width: 60px;
    padding: 10px;

    img {
      width: 35px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90px;
    padding: 12px;

    img {
      width: 55px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 100px;
    padding: 15px;

    img {
      width: 60px;
    }
  }

  @media (min-width: 1280px) {
    width: 90px;
    padding: 10px;

    img {
      width: 60px;
    }
  }
`;

export const FilterContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: #232225;
  padding: 55px;
  border-radius: 12px;
  display: flex;

  h4 {
    color: #B2AFB6;
    margin-bottom: 10px;
    font-size: 17px;
    flex: 0;
  }

  p {
    color: #98959D;
    font-size: 13px;
    flex: 0;
  }

  span {
    font-size: 15px;
    color: #98959D;
    padding: 10px;
  }

  .input-container {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    flex-grow: 1;
    width: 100%; /* Garanta que o container ocupe 100% do espaço */

    .icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #B58934; /* A cor desejada do ícone */
      pointer-events: none; /* Garante que o ícone não atrapalhe a interação do input */
    }

    input {
      padding: 10px 10px 10px 40px; /* Padding deve ser ajustado para não causar overflow */
      width: 100%; /* Garante que o input ocupe 100% do container */
      height: auto;
      background-color: #19181B;
      color: white;
      border: 1px solid #444;
      border-radius: 8px;

      &::placeholder {
        color: #aaa;
      }
    }

    .date-picker-container {
      display: flex; /* Para garantir que o ícone e o DatePicker fiquem lado a lado */
      align-items: center; /* Alinhar verticalmente */

      .date-icon {
        position: absolute;
        z-index: 1;
        color: #B58934;
        margin-left: 10px;
      }

      .date-input {
        width: 100%; /* Garante que o input de data ocupe 100% do container */
      }
    }
  }

  /* Media Queries - celular*/
  @media (max-width: 479px) {
    padding: 30px;

  }

  /* Media Queries - notebook*/
  @media (min-width: 1280px) and (max-width: 1919px) {
    padding: 60px;

    h4 {
      font-size: 16px;
    }
  }

  /* Media Queries - desktop*/
  @media (min-width: 1920px) {
      padding: 100px;

      h4 {
        font-size: 17px;
      }

      .input-container {
        width: auto;
        height: 50px;
      }

      .date-picker-container {
        
        .date-input {
          width: auto;
          height: 50px;
        }
      }

      span {
        font-size: 20px;
      }
    }
`;


export const TitleContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    color: #B58934;
    margin-bottom: 10px;
  }

  p {
    color: #98959D;
    font-size: 13px;
    margin-bottom: 20px;
  }

  @media (max-width: 479px) {
    margin-top: 15px;
  }

  @media (min-width: 1280px) {
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  /* Media Queries - desktop*/
  @media (min-width: 1920px) {
    margin-bottom: 10px;

    h3 {
      font-size: 27px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const FilterButtonContainer = styled.button`
  padding: 18px;
  margin-top: 10px;
  background-color: #B58934;
  color: #000;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bolder;

  &:hover {
    background-color: #e8a622;
  }

  @media (max-width: 479px) {
    font-size: 14px;
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
    padding: 16px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    font-size: 17px;
    padding: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
    padding: 20px;
  }
`;


export const NavBarContainer = styled.ul`
    display: flex;
    justify-content: center; 
    gap: 40px;
    list-style: none;  /* Remove as bolinhas */
    padding: 10px;
    width: 100%;
    width: auto;
    font-family: 'Rye', cursive;

    li {
        color: #B58934;
        font-size: 15px;
        cursor: pointer;
        padding: 10px 7px;
        position: relative;
        text-transform: uppercase;

        &:hover {
            opacity: 0.8;
            transform: scale(1.1);
        }
    }

    li.active {
        border-bottom: 2px solid #B58934; /* Linha abaixo para o menu ativo */
    }
`;

export const TitleSubtitleContainer = styled.div`
    text-align: left;
    margin: 20px 0;

    h1 {
        color: #B58934;
        font-size: 26px;
        /* font-family: 'Rye', cursive; */
    }

    p {
        color: #98959D;
        font-size: 16px;
        margin-top: 10px;
    }
`;

export const TableContainer = styled.div`
  flex: 3;
  margin-left: 20px;
  background-color: #232225;
  padding: 20px;
  border-radius: 12px;
  height: 100%;

  @media (max-width: 479px) {
    margin-left: 0;
    margin-top: 20px;
    padding: 15px;
    max-height: 300px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 15px;
    padding: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 20px;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    margin-left: 25px;
    padding: 25px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #A76E00;
  color: #000;
  padding: 10px;

  @media (max-width: 479px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 9px;
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (min-width: 1280px) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const Td = styled.td`
  background-color: #fff;
  color: #000;
  padding: 10px;
  text-align: center;

  @media (max-width: 479px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 9px;
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (min-width: 1280px) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #B58934;
  border-radius: 10px 10px 0 0; // Arredonda as bordas superiores do container
  padding: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  flex-grow: 2;

  input {
    background: transparent;
    border: none;
    color: white;
    padding: 5px;
    flex: 1;
    &:focus {
      outline: none;
    }
  }

  .icon {
    color: #000;
    margin-right: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1; 
  justify-content: flex-end;

  button {
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    margin-left: 10px;
    font-weight: bold; /* Deixa a fonte mais grossa */
    transition: transform 0.2s; /* Adiciona uma transição suave para o efeito de hover */
    font-size: 15px;

    &:hover {
      transform: scale(1.1); /* Aumenta o tamanho do botão ao passar o mouse */
    }
  }

  .cancel-button {

    background-color: red;
    color: #fff;
    &:hover {
      transform: scale(1.1); /* Aumenta o tamanho do botão ao passar o mouse */
    }
  }
`;

// Estilos para os containers de status
export const StatusContainer = styled.div`
    padding: 8px;
    border-radius: 8px;
    color: black; /* Cor do texto para todos os status */
    font-weight: bold;

    &.agendado {
        background-color: #d4ba6d; /* Cor para status "Agendado" */
    }

    &.concluido {
        background-color: #99fd99; /* Cor para status "Concluído" */
    }

    &.cancelado {
        background-color: #ff6565; /* Cor para status "Cancelado" */
    }
`;

export const CheckboxContainer = styled.div`
  width: 50px; /* Ajuste a largura conforme necessário */
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="checkbox"] {
    width: 20px; /* Ajuste a largura do checkbox */
    height: 20px; /* Ajuste a altura do checkbox */
    cursor: pointer;
    appearance: none;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 3px;
    position: relative;
    outline: none;

    &:checked {
      background-color: #B58934;
      border-color: #B58934;
    }

    &:checked::after {
      content: '\\2714'; /* Unicode para o símbolo de check */
      color: #fff;
      font-size: 15px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #B58934;
  border-radius: 0 0 10px 10px; // Arredonda as bordas inferiores do container

  .rows-per-page {
    color: #000;
    font-weight: bold;
  }

  .pagination-info {
    color: #000;
    font-weight: bold;
  }
`;
